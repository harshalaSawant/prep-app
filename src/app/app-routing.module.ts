import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrepObservablesComponent } from './components/prep-observables/prep-observables.component';
import { PrepServiceComponent } from './components/prep-service/prep-service.component';
import { PrepFormsComponent } from './components/prep-forms/prep-forms.component';
import { PrepLifecycleHooksComponent } from './components/prep-lifecycle-hooks/prep-lifecycle-hooks.component';
import { PrepRoutingComponent } from './components/prep-routing/prep-routing.component';
import { PipesAndDirectivesComponent } from './components/pipes-and-directives/pipes-and-directives.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ChildAComponent } from './components/prep-routing/various-routings/child-a/child-a.component';
import { ChildBComponent } from './components/prep-routing/various-routings/child-b/child-b.component';
import { AuthGuard } from './guards/auth.guard';
import { ChildDataComponent } from './components/prep-routing/various-routings/child-data/child-data.component';
import { DataResolverService } from './services/data-resolver.service';
import { AdminComponent } from './admin/admin/admin.component';
import { VariousRoutingsComponent } from './components/prep-routing/various-routings/various-routings.component';
import { PrepRoutingLazyLoadingComponent } from './components/prep-routing/prep-routing-lazy-loading/prep-routing-lazy-loading.component';

const routes: Routes = [
  {path: 'services', component: PrepServiceComponent},
  {path: 'observables', component: PrepObservablesComponent},
  {path: 'pipesAndDirectives', component: PipesAndDirectivesComponent},
  {path: 'routing', component: PrepRoutingComponent,
    children: [
      { path: 'variousRoutings',
      component: VariousRoutingsComponent,
        children: [
          {path: 'childA', component: ChildAComponent},
          {path: 'childB', component: ChildBComponent},
          {path: 'childData/:id', component: ChildDataComponent, resolve: {student: DataResolverService}},
        ]
      },
      {path: 'lazyLoadRoutings', component: PrepRoutingLazyLoadingComponent,
        children: [
          {path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule)},
          {path: 'orders', loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule)},
          {
            path: '',
            redirectTo: '',
            pathMatch: 'full'
          }
        ]
      },
    ],
    canActivateChild: [AuthGuard],
    canDeactivate: [AuthGuard]
  },
  {path: 'lifecycleHooks', component: PrepLifecycleHooksComponent},
  {path: 'forms', component: PrepFormsComponent},
  {path: 'admin', component: AdminComponent,
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    canLoad: [AuthGuard]
  },
  {path: 'lib', loadChildren: () => import('@angular/forms').then(m =>m.EmailValidator)},
  {
    path: '',
    redirectTo: 'services',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent,
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
