import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {

  form: Form;

  ngOnInit(): void {

  }

  // tslint:disable-next-line:typedef
  onSubmit(value: any) {
    console.log(value);
  }
}

export class Form {
  input: string;
  validation: boolean;

  constructor(input: string) {
    this.input = input;
    this.validation = false;
  }
}
// this.form = {
//   form2: {
//     input2: '',
//     form2_1: {
//       input2_1: ''
//     },
//     form2_2: {
//       input2_2: ''
//     }
//   },
//   form3: {
//     input3: '',
//     form3_1: {
//       input3_1: '',
//     }
//   },
//   form4: {
//     input4: '',
//     form4_1: {
//       input4_1: ''
//     }
//   }
// };
