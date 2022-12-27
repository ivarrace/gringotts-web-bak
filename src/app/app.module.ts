import { NgModule, CUSTOM_ELEMENTS_SCHEMA, LOCALE_ID } from '@angular/core';
import es from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './shared/authconfig.interceptor';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { FlexLayoutModule } from '@angular/flex-layout';
import { NgApexchartsModule } from 'ng-apexcharts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { AccountancyListComponent } from './components/accountancy/accountancy-list/accountancy-list.component';
import { AccountancyDetailsComponent } from './components/accountancy/accountancy-details/accountancy-details.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AccountancySearchComponent } from './components/accountancy/accountancy-search/accountancy-search.component';
import { AppToolbarComponent } from './components/common/app-toolbar/app-toolbar.component';
import { LogInComponent } from './components/common/log-in/log-in.component';
import { RegisterComponent } from './components/common/register/register.component';
import { AccountancyFormComponent } from './components/accountancy/accountancy-form/accountancy-form.component';
import { AccountancyListItemComponent } from './components/accountancy/accountancy-list-item/accountancy-list-item.component';
import { GroupListComponent } from './components/group/group-list/group-list.component';
import { GroupListItemComponent } from './components/group/group-list-item/group-list-item.component';
import { GroupDetailsComponent } from './components/group/group-details/group-details.component';
import { GroupFormComponent } from './components/group/group-form/group-form.component';
import { CategoryListComponent } from './components/category/category-list/category-list.component';
import { CategoryListItemComponent } from './components/category/category-list-item/category-list-item.component';
import { CategoryDetailsComponent } from './components/category/category-details/category-details.component';
import { CategoryFormComponent } from './components/category/category-form/category-form.component';
import { AccountancyReportComponent } from './components/dashboard/accountancy-report/accountancy-report.component';
import { GroupTableComponent } from './components/dashboard/group-table/group-table.component';
import { MovementFormComponent } from './components/dashboard/movement-form/movement-form.component';
import { AccountancyChartComponent } from './components/dashboard/accountancy-chart/accountancy-chart.component';

registerLocaleData(es);

@NgModule({
  declarations: [
    AppComponent,
    AccountancyListComponent,
    AccountancyDetailsComponent,
    DashboardComponent,
    AccountancySearchComponent,
    AppToolbarComponent,
    LogInComponent,
    RegisterComponent,
    AccountancyFormComponent,
    AccountancyListItemComponent,
    GroupListComponent,
    GroupListItemComponent,
    GroupDetailsComponent,
    GroupFormComponent,
    CategoryListComponent,
    CategoryListItemComponent,
    CategoryDetailsComponent,
    CategoryFormComponent,
    AccountancyReportComponent,
    GroupTableComponent,
    MovementFormComponent,
    AccountancyChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    NgApexchartsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {
      provide: LOCALE_ID,
      useValue: 'es-ES'
    }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
