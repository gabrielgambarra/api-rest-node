import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientsComponent } from './patients.component';
import { PatientsListComponent } from './patients-list/patients-list.component';
import { PatientsRoutes } from './patients.routing';
import { RouterModule } from '@angular/router';
import { TableModule } from 'src/app/shared/table/table.module';



@NgModule({
  declarations: [PatientsComponent, PatientsListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(PatientsRoutes),
    TableModule
  ]
})
export class PatientsModule { }
