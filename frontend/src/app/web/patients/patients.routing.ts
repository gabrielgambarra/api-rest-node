 import { Routes } from '@angular/router';
import { PatientsListComponent } from './patients-list/patients-list.component';

export const PatientsRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: PatientsListComponent
            }
        ]
    }
];