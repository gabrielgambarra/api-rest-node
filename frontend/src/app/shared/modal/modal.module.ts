import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DoctorFormModule } from '../doctor-form/doctor-form.module';
import { PatientFormModule } from '../patient-form/patient-form.module';
import { SheculeFormModule } from '../shecule-form/shecule-form.module';

@NgModule({
    declarations: [ModalComponent],
    imports: [
        CommonModule,
        MatDialogModule,
        FlexLayoutModule,
        FormsModule,
        ReactiveFormsModule,
        DoctorFormModule,
        PatientFormModule,
        SheculeFormModule
    ],
    exports: [],
    providers: []
})
export class ModalModule { }