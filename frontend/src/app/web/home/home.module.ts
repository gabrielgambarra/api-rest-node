import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SchedulesListComponent } from './schedules-list/schedules-list.component';
import { HomeRoutes } from './home.routing';
import { RouterModule } from '@angular/router';
import { TableComponent } from 'src/app/shared/table/table.component';
import { TableModule } from 'src/app/shared/table/table.module';



@NgModule({
  declarations: [HomeComponent, SchedulesListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(HomeRoutes),
    TableModule
  ]
})
export class HomeModule { }
