import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfigurationKeyComponent } from '../app/components/configurationkey/configurationkey.component';
import { HomeComponent } from '../app/components/home/home.component';
import { AppComponent } from './app.component';
import { ConfigurationKeyDetailComponent } from '../app/components/configurationkey-detail/configurationkey-detail.component';
import { PredefinedvalueComponent } from '../app/components/predefinedvalue/predefinedvalue.component';
import { MessagetypeComponent } from '../app/components/messagetype/messagetype.component';
import { MessagesourceComponent } from '../app/components/messagesource/messagesource.component';
import { AboutComponent } from '../app/components/about/about.component';
import { AuthGuard } from '../app/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'configurationKeys', component: ConfigurationKeyComponent, canActivate: [AuthGuard] },
  { path: 'configurationKeysDetail/:id', component: ConfigurationKeyDetailComponent, canActivate: [AuthGuard] },
  { path: 'predefinedValue', component: PredefinedvalueComponent, canActivate: [AuthGuard] },
  { path: 'messageTypes', component: MessagetypeComponent, canActivate: [AuthGuard] },
  { path: 'messageSources', component: MessagesourceComponent, canActivate: [AuthGuard] },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
