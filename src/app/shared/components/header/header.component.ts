import { Component, OnInit } from '@angular/core';
import { DataSharingService } from '../../data-sharing.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  navList = ["About Us","Our Product","Contact Us","More"]
  searchValue:string = "";

  constructor(private sharingSvc:DataSharingService) { }

  ngOnInit(): void {
  }

  onClickSearch(event){
    if(event.keyCode==13)
    this.sharingSvc.searchItem(this.searchValue);
  }

}
