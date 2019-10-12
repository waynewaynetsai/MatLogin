import { Component, OnInit } from '@angular/core';
import { FormService } from '../../form.service';
import { MatStepper } from '@angular/material/stepper';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-check-password',
  templateUrl: './check-password.component.html',
  styleUrls: ['./check-password.component.css']
})
export class CheckPasswordComponent implements OnInit {

  constructor(private fs: FormService) { }

  ngOnInit() {
  }
  onClick(matIpt) {
    matIpt.focus();
  }
}
