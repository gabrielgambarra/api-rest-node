import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  isDoctorScreen: boolean;
  isPatientScreen: boolean;
  isScheduleScreen: boolean;

  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public screen: string
  ) { }

  ngOnInit() {

    if (this.screen == 'schedules') {
      this.isScheduleScreen = true;
    }

    if (this.screen == 'doctors') {
      this.isDoctorScreen = true;
    }

    if (this.screen == 'patients') {
      this.isPatientScreen = true;
    }
  }

  onSave(event) {
    this.dialogRef.close(event);
  }

  onNoClick() {
    this.dialogRef.close();
  }

}
