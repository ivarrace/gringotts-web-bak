import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './shared/authconfig.interceptor';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { FlexLayoutModule } from '@angular/flex-layout';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';

import { AccountancyListComponent } from './components/accountancy/accountancy-list/accountancy-list.component';
import { AccountancyDetailsComponent } from './components/accountancy/accountancy-details/accountancy-details.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AccountancySearchComponent } from './components/accountancy/accountancy-search/accountancy-search.component';
import { AppToolbarComponent } from './components/common/app-toolbar/app-toolbar.component';
import { LogInComponent } from './components/common/log-in/log-in.component';
import { RegisterComponent } from './components/common/register/register.component';
import { UserProfileComponent } from './components/user/user-profile/user-profile.component';
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
    UserProfileComponent,
    AccountancyFormComponent,
    AccountancyListItemComponent,
    GroupListComponent,
    GroupListItemComponent,
    GroupDetailsComponent,
    GroupFormComponent,
    CategoryListComponent,
    CategoryListItemComponent,
    CategoryDetailsComponent,
    CategoryFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularMaterialModule
    //FlexLayoutModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
