import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page/login-page.component';
import { LoginStepContainerComponent } from './login-step-container/login-step-container.component';
import { CheckAccountComponent } from './login-steps/check-account/check-account.component';
import { CheckPasswordComponent } from './login-steps/check-password/check-password.component';
import { RedirectComponent } from './login-steps/redirect/redirect.component';
import { SharedMaterialModule } from '../shared-material/shared-material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormService } from './form.service';



@NgModule({
  declarations: [
    LoginPageComponent,
    LoginStepContainerComponent,
    CheckAccountComponent,
    CheckPasswordComponent,
    RedirectComponent
  ],
  imports: [
    CommonModule,
    SharedMaterialModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [LoginPageComponent],
  providers: [ FormService],
  entryComponents: []
})
export class AuthModule { }
