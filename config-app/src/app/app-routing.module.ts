import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfigurationKeyComponent } from '../app/components/configurationkey/configurationkey.component';
import { DashboardComponent } from '../app/components/dashboard/dashboard.component';
import { HomeComponent } from '../app/components/home/home.component';
import { AppComponent } from './app.component';
import { ConfigurationKeyDetailComponent } from '../app/components/configurationkey-detail/configurationkey-detail.component';
import { PredefinedvalueComponent } from '../app/components/predefinedvalue/predefinedvalue.component';
import { MessagetypeComponent } from '../app/components/messagetype/messagetype.component';
import { MessagesourceComponent } from '../app/components/messagesource/messagesource.component';
import { AuthGuard } from '../app/auth.guard';

const routes: Routes = [
  { path: 'app-root', component: AppComponent },
  { path: 'home', component: HomeComponent }, //, canActivate: [AuthGuard]
  { path: 'dashboard', component: DashboardComponent },
  { path: 'configurationKeys', component: ConfigurationKeyComponent },
  { path: 'configurationKeysDetail/:id', component: ConfigurationKeyDetailComponent },
  { path: 'predefinedValue', component: PredefinedvalueComponent },
  { path: 'messageTypes', component: MessagetypeComponent },
  { path: 'messageSources', component: MessagesourceComponent },
  { path: '', redirectTo: '/app-root', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
