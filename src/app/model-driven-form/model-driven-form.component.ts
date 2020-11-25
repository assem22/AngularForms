import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-model-driven-form',
  templateUrl: './model-driven-form.component.html',
  styleUrls: ['./model-driven-form.component.css']
})
export class ModelDrivenFormComponent implements OnInit {

  constructor() { }

  signUpForm = new FormGroup({
    firstname: new FormControl(),
    lastname: new FormControl(),
    email: new FormControl(),
    password: new FormControl(),
  });

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    console.log('successfully');
  }
}
