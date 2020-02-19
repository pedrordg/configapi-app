import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { OAuthModule } from 'angular-oauth2-oidc';
import { I18NextModule } from 'angular-i18next';

import { AppComponent } from './app.component';
import { ConfigurationKeyComponent } from '../app/components/configurationkey/configurationkey.component';
import { ConfigurationKeyDetailComponent } from '../app/components/configurationkey-detail/configurationkey-detail.component';
import { DashboardComponent } from '../app/components/dashboard/dashboard.component';
import { PredefinedvalueComponent } from '../app/components/predefinedvalue/predefinedvalue.component';
import { MessagetypeComponent } from '../app/components/messagetype/messagetype.component';
import { MessagesourceComponent } from '../app/components/messagesource/messagesource.component';
import { HomeComponent } from './components/home/home.component';
import { MessagesourcePopupComponent } from '../app/components/messagesource/messagesource-popup.component';
import { AuthGuard } from '../app/auth.guard';
import { I18N_PROVIDERS } from '../app/translations/translationsConfig';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';

const modules = [
  MatTableModule,
  MatTabsModule,
  MatDialogModule,
  MatInputModule,
  MatButtonModule,
  MatSelectModule,
];

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
    MessagesourcePopupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
     OAuthModule.forRoot({
       resourceServer: {
         sendAccessToken: true
       }
      }),
    modules,
    I18NextModule.forRoot()
  ],
  entryComponents: [
    MessagesourcePopupComponent
  ],
  providers: [
    AuthGuard,
    I18N_PROVIDERS
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
