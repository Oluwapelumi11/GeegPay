import { Routes } from '@angular/router';
import { SidenavcomponentComponent } from './sidenavcomponent/sidenavcomponent.component';
import { Error404ComComponent } from './error-404-com/error-404-com.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
    {
        path: "",
        component: DashboardComponent,
    },
    {
        path: "**",
        component: Error404ComComponent,
    }
];
