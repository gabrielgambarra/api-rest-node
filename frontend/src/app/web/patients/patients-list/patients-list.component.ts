import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/providers/models/patient.model';
import { PatientsService } from 'src/app/providers/services/patients.service';

@Component({
  selector: 'app-patients-list',
  templateUrl: './patients-list.component.html',
  styleUrls: ['./patients-list.component.scss']
})
export class PatientsListComponent implements OnInit {

  items: Patient[] = [];

  constructor(
    private patientsService: PatientsService
  ) { }

  ngOnInit() {
    this.patientsService.getAll().subscribe(success => {
      this.items = success.patients;
    });
  }

}
