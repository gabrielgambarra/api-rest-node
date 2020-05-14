import { Component, OnInit } from '@angular/core';
import { SchedulesService } from 'src/app/providers/services/schedules.service';
import { Scheduling } from 'src/app/providers/models/scheduling.model';

@Component({
  selector: 'app-schedules-list',
  templateUrl: './schedules-list.component.html',
  styleUrls: ['./schedules-list.component.scss']
})
export class SchedulesListComponent implements OnInit {

  items: Scheduling[] = [];

  constructor(
    private schedulesService: SchedulesService
  ) { }

  ngOnInit() {
    this.schedulesService.getAll().subscribe(success => {
      this.items = success.schedules;
    });
  }

}
