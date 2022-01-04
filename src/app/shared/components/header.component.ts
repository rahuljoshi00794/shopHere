import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  navList = ["About Us","Our Product","Contact Us","More"]

  constructor() { }

  ngOnInit(): void {
  }

}
