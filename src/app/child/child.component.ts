import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() getMyArray: any = [];

  constructor() { }

  ngOnInit(): void {
    console.log(this.getMyArray);

  }
}
