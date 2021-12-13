import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { StockService } from '../services/stock.service';
import { Company } from '../shared/models/company.model';
import { Stock } from '../shared/models/stock.model';
import { User } from '../shared/models/user.model';

@Component({
  selector: 'app-addstock',
  templateUrl: './addstock.component.html',
  styleUrls: ['./addstock.component.scss']
})
export class AddstockComponent implements OnInit {
  submitted = false;
  stock: Stock = {
    companyId: 0,
    companyName: '',
    description: '',
    packsize: '',
    quantity: '',
    measurement: '',
    specificGravity: ''
  }
  isLoading = false;
  company = new Company();
  comp: Company[] = [];
  
  constructor(private stockService: StockService, private _snackBar: MatSnackBar) {}
  ngOnInit() : void {
    this.getComp();
  }
  
  onChange(newValue: any) {
    this.stockService.getCompName(newValue).subscribe(
      data => {
        this.stock.companyName = data.companyName;
      },
      err => {
        console.log(err);
        this.openSnackBar("Error Retrieving Company List")
      }
    )
  }

  getComp(): void {
    this.stockService.getCompanies().subscribe(
      data => this.comp = data,
      error => {
        console.log(error);
        this.openSnackBar("Error Retrieving Companies")
      }
    )
  }

  saveStock() : void {
    const data = {
    companyId: this.stock.companyId,
    companyName: this.stock.companyName,
    description: this.stock.description,
    packsize: this.stock.packsize,
    quantity: this.stock.quantity,
    measurement: this.stock.measurement,
    specificGravity: this.stock.specificGravity
    };

    this.stockService.postStock(data).subscribe(
      res => {
        console.log(res);
        this.submitted = true;
        this.newStock();
        this.openSnackBar("New Stock Record Added")
      },
      err => {
        console.log(err);
        this.openSnackBar("An error occurred, try again.")
      }
    )
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, "Close", {
      duration: 5000,
    });
  }

  newStock() : void {
    this.submitted = false;
    this.stock = {
      companyId: 0,
      companyName: '',
      description: '',
      packsize: '',
      quantity: '',
      measurement: '',
      specificGravity: ''
    }
  }
}
