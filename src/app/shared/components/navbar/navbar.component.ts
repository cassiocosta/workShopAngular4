import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'minhanavbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() titulo:string = 'CEP Legal';
  constructor() { }

  ngOnInit() {
  }

}
