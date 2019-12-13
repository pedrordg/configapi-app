import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfigurationKeyComponent } from '../app/components/configurationkey/configurationkey.component';
import { ConfigurationKeyDetailComponent } from '../app/components/configurationkey-detail/configurationkey-detail.component';
import { DashboardComponent } from '../app/components/dashboard/dashboard.component';
import { PredefinedvalueComponent } from '../app/components/predefinedvalue/predefinedvalue.component';
import { MessagetypeComponent } from '../app/components/messagetype/messagetype.component';
import { MessagesourceComponent } from '../app/components/messagesource/messagesource.component';

import { OAuthModule } from 'angular-oauth2-oidc';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ConfigurationKeyComponent,
    ConfigurationKeyDetailComponent,
    PredefinedvalueComponent,
    MessagetypeComponent,
    MessagesourceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,

    OAuthModule.forRoot(),

    MatTableModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
