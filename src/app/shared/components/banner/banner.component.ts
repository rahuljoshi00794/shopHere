import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  sliderImages = [
    "assets/images/blackFridayImage.png",
    "assets/images/shoppingImage.png",
    "assets/images/summerSaleImage.png",
    "assets/images/superSale.png",
  ]
  currentImageIndex = 0;

  constructor() { }

  ngOnInit(): void {
  }
  onClickLeft() {
    if (this.currentImageIndex == 0) {
      this.currentImageIndex = this.sliderImages.length - 1;
      return;
    }
    this.currentImageIndex--;
  }
  onClickRight() {
    if (this.currentImageIndex == this.sliderImages.length - 1) {
      this.currentImageIndex = 0;
      return;
    }
    this.currentImageIndex++;
  }

}
