import { NgModule, ModuleWithProviders } from '@angular/core';
import {
  MatIconModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatRippleModule,
  MatSidenavModule,
  MatToolbarModule,
  MatListModule,
  MatMenuModule
} from '@angular/material';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSliderModule} from '@angular/material/slider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

import {MatSelectModule} from '@angular/material/select';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import {CdkStepperModule} from '@angular/cdk/stepper';


@NgModule({
  imports: [
    MatProgressBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatRippleModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatSelectModule,
    MatSliderModule,
    OverlayModule,
    PortalModule,
    CdkStepperModule,
  ],
  exports: [
    MatProgressBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatRippleModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatSelectModule,
    MatSliderModule,
    OverlayModule,
    PortalModule,
    CdkStepperModule,
  ],
  declarations: [ ]
})
export class SharedMaterialModule {
  static forRoot(providers = []): ModuleWithProviders {
    return {
      ngModule: SharedMaterialModule,
      providers: [ ]
    };
  }
}
