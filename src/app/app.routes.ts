import { RouterModule, Routes} from "@angular/router";
import { ModuleWithProviders } from "@angular/core";

//component
import { DashboardComponent } from "./dashboard/dashboard.component";

//authguard searvices
// import { AuthGuard } from './guard/guard.guard';

import { NgModule } from '@angular/core';



const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: '**', 
        component: DashboardComponent
    }


];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule { }



