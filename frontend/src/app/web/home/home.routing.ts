import { Routes } from '@angular/router';
import { SchedulesListComponent } from './schedules-list/schedules-list.component';

export const HomeRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: SchedulesListComponent
            }
            
        ]
    }
];