import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Scheduling } from 'src/app/providers/models/scheduling.model';
import { SchedulesService } from 'src/app/providers/services/schedules.service';
import { PatientsService } from 'src/app/providers/services/patients.service';
import { DoctorsService } from 'src/app/providers/services/doctors.service';
import { Doctor } from 'src/app/providers/models/doctor.model';
import { Patient } from 'src/app/providers/models/patient.model';

@Component({
  selector: 'app-shecule-form',
  templateUrl: './shecule-form.component.html',
  styleUrls: ['./shecule-form.component.scss']
})
export class SheculeFormComponent implements OnInit {

  scheduling = new Scheduling();
  @Output() onSaveScheduling = new EventEmitter();

  doctors: Doctor[] = [];
  patients: Patient[] = [];

  constructor(
    private doctorsService: DoctorsService,
    private patientsService: PatientsService,
    private schedulesService: SchedulesService
  ) { }

  ngOnInit() {
    this.doctorsService.getAll().subscribe(success => {
      this.doctors = success.doctors;
    });

    this.patientsService.getAll().subscribe(success => {
      this.patients = success.patients;
    });
  }

  save(scheduling) {
    console.log(scheduling.date)
    scheduling.date = new Date(scheduling.date.replace('-', '/')).getTime();
    console.log(scheduling.date)
    this.schedulesService.save(scheduling).subscribe(success => {
      this.onSaveScheduling.emit(success.scheduling);
    });
  }

}
