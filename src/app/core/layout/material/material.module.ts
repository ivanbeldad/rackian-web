import { NgModule } from '@angular/core';
import {
  MdButtonModule,
  MdCardModule,
  MdIconModule,
  MdMenuModule,
  MdProgressBarModule,
  MdProgressSpinnerModule,
  MdSliderModule,
  MdToolbarModule,
  MdSidenavModule, MdInputModule, MdListModule,
} from '@angular/material';

@NgModule({
  exports: [
    MdCardModule,
    MdSliderModule,
    MdProgressBarModule,
    MdProgressSpinnerModule,
    MdIconModule,
    MdMenuModule,
    MdButtonModule,
    MdToolbarModule,
    MdSidenavModule,
    MdInputModule,
    MdListModule,
  ],
})
export class MaterialModule {
}
