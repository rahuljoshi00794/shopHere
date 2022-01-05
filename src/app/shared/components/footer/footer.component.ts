import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  footerList = [
    {
      label: "SOCIAL",
      subList: ["Facebook", "Twitter", "Instagram","Youtube"]
    },
    {
      label: "ABOUT",
      subList: ["About Us", "Contact Us", "Careers", "Global Presence", "Corporate Information"]
    },
    {
      label: "POLICY",
      subList: ["Return Policy", "Terms Of Use", "Security", "Privacy"]
    },
    {
      label: "HELP",
      subList: ["Payments", "Shiping","Cancellation & Returns", "FAQ"]

    }

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
