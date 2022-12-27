import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './shared/auth.guard';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AccountancyListComponent } from './components/accountancy/accountancy-list/accountancy-list.component';
import { AccountancyDetailsComponent } from './components/accountancy/accountancy-details/accountancy-details.component';
import { LogInComponent } from './components/common/log-in/log-in.component';
import { RegisterComponent } from './components/common/register/register.component';
import { GroupListComponent } from './components/group/group-list/group-list.component';
import { GroupDetailsComponent } from './components/group/group-details/group-details.component';
import { CategoryListComponent } from './components/category/category-list/category-list.component';
import { CategoryDetailsComponent } from './components/category/category-details/category-details.component';
import { AccountancyReportComponent } from './components/dashboard/accountancy-report/accountancy-report.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'login', component: LogInComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'dashboard',
    children: [
      {
        path: '',
        component: DashboardComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'accountancies/:accountancyKey/report',
        component: AccountancyReportComponent,
        canActivate: [AuthGuard]
      }
    ]
  },
  {
    path: 'accountancies',
    children: [
      {
        path: '',
        component: AccountancyListComponent,
        canActivate: [AuthGuard],
        data: {
          breadcrumb: 'UserProfileComponent'
        }
      },
      {
        path: ':accountancyKey',
        children: [
          {
            path: '',
            component: AccountancyDetailsComponent,
            canActivate: [AuthGuard],
            data: {
              breadcrumb: 'UserProfileComponent'
            }
          },
          {
            path: 'incomes',
            children: [
              {
                path: '',
                component: GroupListComponent,
                canActivate: [AuthGuard],
                data: {
                  groupType: 'incomes',
                  breadcrumb: 'UserProfileComponent'
                }
              },
              {
                path: ':groupKey',
                children: [
                  {
                    path: '',
                    component: GroupDetailsComponent,
                    canActivate: [AuthGuard],
                    data: {
                      groupType: 'incomes',
                      breadcrumb: 'UserProfileComponent'
                    }
                  },
                  {
                    path: 'categories',
                    children: [
                      {
                        path: '',
                        component: CategoryListComponent,
                        canActivate: [AuthGuard],
                        data: {
                          groupType: 'incomes',
                          breadcrumb: 'UserProfileComponent'
                        }
                      },
                      {
                        path: ':categoryKey',
                        component: CategoryDetailsComponent,
                        canActivate: [AuthGuard],
                        data: {
                          groupType: 'incomes',
                          breadcrumb: 'UserProfileComponent'
                        }
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            path: 'expenses',
            children: [
              {
                path: '',
                component: GroupListComponent,
                canActivate: [AuthGuard],
                data: {
                  groupType: 'expenses',
                  breadcrumb: 'UserProfileComponent'
                }
              },
              {
                path: ':groupKey',
                children: [
                  {
                    path: '',
                    component: GroupDetailsComponent,
                    canActivate: [AuthGuard],
                    data: {
                      groupType: 'expenses',
                      breadcrumb: 'UserProfileComponent'
                    }
                  },
                  {
                    path: 'categories',
                    children: [
                      {
                        path: '',
                        component: CategoryListComponent,
                        canActivate: [AuthGuard],
                        data: {
                          groupType: 'expenses',
                          breadcrumb: 'UserProfileComponent'
                        }
                      },
                      {
                        path: ':categoryKey',
                        component: CategoryDetailsComponent,
                        canActivate: [AuthGuard],
                        data: {
                          groupType: 'expenses',
                          breadcrumb: 'UserProfileComponent'
                        }
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
