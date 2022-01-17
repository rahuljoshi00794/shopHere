import { Component, HostListener, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataSharingService } from 'src/app/shared/data-sharing.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  currentDisplayedImage:string;
  selectedVarient:any;
  selectedColor:any;
  constructor(private dialogRef:MatDialogRef<ProductDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public dialogData: any ) { }

  ngOnInit(): void {
    this.currentDisplayedImage = this.dialogData?.product_image?.[0];
    this.selectedVarient = this.dialogData?.product_varients?.[0];
    this.selectedColor = this.dialogData?.product_varients?.[0]?.colors?.[0];
  }

  onClickClose(){
    this.dialogRef.close();
  }
 

}
