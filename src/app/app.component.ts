import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'passdata-demo';

  myform = new FormGroup({

    name: new FormControl(''),
    address: new FormControl(''),
    age: new FormControl(''),
  });

  formdata: {

    name: string;
    address: string;
    age: string;
  }[] = [];

  senddata() {
    this.formdata.push(this.myform.value);
    console.log(this.formdata);
  }
}

