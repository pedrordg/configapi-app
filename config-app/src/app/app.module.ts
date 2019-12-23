import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ConfigurationKeyComponent } from '../app/components/configurationkey/configurationkey.component';
import { ConfigurationKeyDetailComponent } from '../app/components/configurationkey-detail/configurationkey-detail.component';
import { DashboardComponent } from '../app/components/dashboard/dashboard.component';
import { PredefinedvalueComponent } from '../app/components/predefinedvalue/predefinedvalue.component';
import { MessagetypeComponent } from '../app/components/messagetype/messagetype.component';
import { MessagesourceComponent } from '../app/components/messagesource/messagesource.component';
import { HomeComponent } from '../app/components/home/home.component';
import { AuthService } from '../app/services/auth.service';
import { AuthGuard } from '../app/auth.guard';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';

import { OAuthModule } from 'angular-oauth2-oidc';
import { JwtModule } from '@auth0/angular-jwt';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    ConfigurationKeyComponent,
    ConfigurationKeyDetailComponent,
    PredefinedvalueComponent,
    MessagetypeComponent,
    MessagesourceComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    OAuthModule.forRoot(),
    MatTableModule,
    MatTabsModule,
    MatDialogModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:4200']
      }
    })
  ],
  providers: [
    AuthService,
    AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function tokenGetter() {
  return localStorage.getItem('access_token');
}
