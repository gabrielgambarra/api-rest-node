import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { SchedulesService } from 'src/app/providers/services/schedules.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input('items') items: any = [];
  @Input('type') type: string;
  @Input('title') title: string;

  constructor(
    public dialog: MatDialog,
    private schedulesService: SchedulesService
  ) { }

  ngOnInit() {
  }

  getDoctorName(item) {
    return this.type == 'doctors' ? item.name : item.doctor.name;
  }

  getPatientName(item) {
    return this.type == 'patients' ? item.name : item.patient.name;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '250px',
      data: this.type
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (this.type == 'schedules') {
          this.schedulesService.getAll().subscribe(success => {
            this.items = success.schedules;
          });
        } else {
          this.items.push(result);
        }
      }
    });
  }

}
