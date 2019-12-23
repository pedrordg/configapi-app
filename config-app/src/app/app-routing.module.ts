import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfigurationKeyComponent } from '../app/components/configurationkey/configurationkey.component';
import { DashboardComponent } from '../app/components/dashboard/dashboard.component';
import { HomeComponent } from '../app/components/home/home.component';
import { ConfigurationKeyDetailComponent } from '../app/components/configurationkey-detail/configurationkey-detail.component';
import { PredefinedvalueComponent } from '../app/components/predefinedvalue/predefinedvalue.component';
import { MessagetypeComponent } from '../app/components/messagetype/messagetype.component';
import { MessagesourceComponent } from '../app/components/messagesource/messagesource.component';
import { AuthGuard } from '../app/auth.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'configurationKeys', component: ConfigurationKeyComponent },
  { path: 'configurationKeysDetail/:id', component: ConfigurationKeyDetailComponent},
  { path: 'predefinedValue', component: PredefinedvalueComponent },
  { path: 'messageTypes', component: MessagetypeComponent, canActivate: [AuthGuard] },
  { path: 'messageSources', component: MessagesourceComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
