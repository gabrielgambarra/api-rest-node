import { Routes } from '@angular/router';
import { DoctorsListComponent } from './doctors-list/doctors-list.component';

export const DoctorsRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: DoctorsListComponent
            }
        ]
    }
];