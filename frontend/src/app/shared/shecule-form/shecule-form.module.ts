import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SheculeFormComponent } from './shecule-form.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [SheculeFormComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [SheculeFormComponent]
})
export class SheculeFormModule { }
