import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfigurationKeyComponent } from '../app/components/configurationkey/configurationkey.component';
import { DashboardComponent } from '../app/components/dashboard/dashboard.component';
import { ConfigurationKeyDetailComponent } from '../app/components/configurationkey-detail/configurationkey-detail.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'configurationKeys', component: ConfigurationKeyComponent },
  { path: 'detail/:id', component: ConfigurationKeyDetailComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
