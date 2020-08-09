import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './log-in/log-in.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './dashboard/header/header.component';
import { ContentComponent } from './dashboard/content/content.component';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TabViewModule} from 'primeng/tabview';
import { ImportDataComponent } from './dashboard/content/import-data/import-data.component';
import {CheckboxModule} from 'primeng/checkbox';
import { ViewLeadsComponent } from './dashboard/content/view-leads/view-leads.component';
import {DialogModule} from 'primeng/dialog';
import {NgxPaginationModule} from 'ngx-pagination';
import { QualityComponent } from './dashboard/content/quality/quality.component';
import { UserDetailsComponent } from './dashboard/content/user-details/user-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    DashboardComponent,
    HeaderComponent,
    ContentComponent,
    ImportDataComponent,
    ViewLeadsComponent,
    QualityComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    TabViewModule,
    CheckboxModule,
    DialogModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
