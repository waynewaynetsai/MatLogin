import { Component, OnInit } from '@angular/core';
import { FormService } from '../../form.service';

@Component({
  selector: 'app-check-account',
  templateUrl: './check-account.component.html',
  styleUrls: ['./check-account.component.css']
})
export class CheckAccountComponent implements OnInit {

  constructor(private fs: FormService) { }

  ngOnInit() {
  }
  onClick(matIpt) {
    matIpt.focus();
  }
}
