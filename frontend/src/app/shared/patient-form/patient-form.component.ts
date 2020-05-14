import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PatientsService } from 'src/app/providers/services/patients.service';
import { Patient } from 'src/app/providers/models/patient.model';

@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.scss']
})
export class PatientFormComponent implements OnInit {

  patient = new Patient();
  @Output() onSavePatient = new EventEmitter();

  constructor(
    private patientsService: PatientsService
  ) { }

  ngOnInit() {
  }

  save(patient) {
    this.patientsService.save(patient).subscribe(success => {
      this.onSavePatient.emit(success.patient);
    });
  }

}
