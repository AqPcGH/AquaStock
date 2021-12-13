import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { StockService } from '../services/stock.service';
import { Company } from '../shared/models/company.model';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.scss']
})
export class AddCompanyComponent implements OnInit {
  submitted = false
  company: Company = {
    companyName: ""
  }
  companies = new Company();
  comp: Company[] = [];
  
  constructor(private stockService: StockService, private _snackBar: MatSnackBar) { }
  ngOnInit(): void {
    this.getCompany();
  }

  deleteComp(company: Company): void {
    if (window.confirm('Are you sure you want to delete this record?')) {
      this.stockService.deleteComp(company).subscribe(
        () => {
          this.getCompany();
          this.openSnackBar("Company Deleted Successfully")
        }
      )
    }  
  }

  getCompany() {
    this.stockService.getCompanies().subscribe(
      data => {
        this.comp = data
      },
      err => {
        console.log(err);
        this.openSnackBar("Error Retrieving Companies")
      }
    )
  }

  saveCompany() : void {
    const data = {
      companyName: this.company.companyName
    };

    this.stockService.postCompanies(data).subscribe(
      res => {
        console.log(res);
        this.submitted = true;
        this.newCompany();
        this.openSnackBar("Record Successfully Submitted.");
        this.getCompany();
        
      },
      err => {
        console.log(err)
        this.openSnackBar("Error Occurred, Try Again.")
      }
    )
  }
  
  openSnackBar(message: string) {
    this._snackBar.open(message, "Close", {
      duration: 5000,
    });
  }

  newCompany() : void {
    this.submitted = false;
    this.company = {
      companyName: ''
    }
  }


}
