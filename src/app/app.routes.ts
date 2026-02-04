import { Routes } from '@angular/router';
import { RoutesApp } from './core/enum/routes/routes.enum';
import { DeliveryListComponent } from './pages/student-list.component/delivery-list.component';
import { SubjectListComponent } from './pages/student-list.component/subject-list/subject-list.component';

export const routes: Routes = [
  {
    path: RoutesApp.STUDENTLIST,
    component: DeliveryListComponent,
  },
  {
    path: RoutesApp.SUBJECTLIST,
    component: SubjectListComponent,
  },
  { path: '', component: DeliveryListComponent },
];
