import {Routes} from '@angular/router';
import {FeaturesComponent} from './features/features.component';
import {PropertiesComponent} from './properties/properties.component';
import {DashboardComponent} from './dashboard/dashboard.component';

export const appRoutes: Routes = [
  {
    path: 'features', component: FeaturesComponent
  },
  {
    path: 'properties', component: PropertiesComponent
  },
  {
    path: 'dashboard', component: DashboardComponent
  },
  {
    path: '**', redirectTo: 'features'
  }
];
