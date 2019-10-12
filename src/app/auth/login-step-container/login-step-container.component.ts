import {
  Component, OnInit, ChangeDetectorRef,
  ElementRef
} from '@angular/core';
import { Directionality } from '@angular/cdk/bidi';
import { CdkStepper } from '@angular/cdk/stepper';
import { FormService } from '../form.service';
import * as motion from './step-motion';

@Component({
  selector: 'app-login-step-container',
  templateUrl: './login-step-container.component.html',
  styleUrls: ['./login-step-container.component.css'],
  providers: [{
    provide: CdkStepper,
    useExisting: LoginStepContainerComponent
  }],
  animations: [
    motion.stepSlider
  ]
})
export class LoginStepContainerComponent extends CdkStepper implements OnInit {

  constructor(
    private fs: FormService,
    dir: Directionality,
    changeDetectorRef: ChangeDetectorRef) {
    super(dir, changeDetectorRef);
  }

  ngOnInit() {
  }

}
