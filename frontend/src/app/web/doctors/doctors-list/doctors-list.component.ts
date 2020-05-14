import { Component, OnInit } from '@angular/core';
import { DoctorsService } from 'src/app/providers/services/doctors.service';
import { Doctor } from 'src/app/providers/models/doctor.model';

@Component({
  selector: 'app-doctors-list',
  templateUrl: './doctors-list.component.html',
  styleUrls: ['./doctors-list.component.scss']
})
export class DoctorsListComponent implements OnInit {

  items: Doctor[] = [];

  constructor(
    private doctorsService: DoctorsService
  ) { }

  ngOnInit() {
    this.doctorsService.getAll().subscribe(success => {
      this.items = success.doctors;
    });
  }

}
