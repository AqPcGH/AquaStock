import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StockService } from 'src/app/services/stock.service';
import { Stock } from 'src/app/shared/models/stock.model';

@Component({
  selector: 'app-packsize-dialog',
  templateUrl: './packsize-dialog.component.html',
  styleUrls: ['./packsize-dialog.component.scss']
})
export class PacksizeDialogComponent implements OnInit {
  local_data:any;
  stock_data:any;
  constructor(private stockService: StockService, public dialogRef: MatDialogRef<PacksizeDialogComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: Stock) {
      this.local_data = {...data};
  }
  
  doAction() {
    this.dialogRef.close(this.local_data);
  }

  closeDialog() {
    // this.dialogRef.close({event: 'Cancel'});
    
    this.closeEvent(this.local_data._id)
    this.dialogRef.close(this.stock_data)
  }

  closeEvent(_id : string) {
    this.stockService.GetAStock(_id).subscribe(
      data => {
        this.stock_data = data
      }
    )
  }

  ngOnInit(): void {
    this.closeEvent(this.local_data._id)
  }

}
