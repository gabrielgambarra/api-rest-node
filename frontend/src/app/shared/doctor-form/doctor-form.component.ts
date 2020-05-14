import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DoctorsService } from 'src/app/providers/services/doctors.service';
import { Doctor } from 'src/app/providers/models/doctor.model';

@Component({
  selector: 'app-doctor-form',
  templateUrl: './doctor-form.component.html',
  styleUrls: ['./doctor-form.component.scss']
})
export class DoctorFormComponent implements OnInit {

  doctor = new Doctor();
  @Output() onSaveDoctor = new EventEmitter();

  constructor(
    private doctorsService: DoctorsService
  ) { }

  ngOnInit() {
  }

  save(doctor) {
    this.doctorsService.save(doctor).subscribe(success => {
      this.onSaveDoctor.emit(success.doctor);
    });
  }

}
