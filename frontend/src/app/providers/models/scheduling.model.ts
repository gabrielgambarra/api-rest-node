import { Doctor } from './doctor.model';
import { Patient } from './patient.model';

export class Scheduling {
    _id: string;
    date: number;
    doctor: Doctor;
    patient: Patient;
}