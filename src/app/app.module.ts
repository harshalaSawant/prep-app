import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeNgImportsModule } from './primeng.module';
import { PrepObservablesComponent } from './components/prep-observables/prep-observables.component';
import { PipesAndDirectivesComponent } from './components/pipes-and-directives/pipes-and-directives.component';
import { PrepRoutingComponent } from './components/prep-routing/prep-routing.component';
import { PrepLifecycleHooksComponent } from './components/prep-lifecycle-hooks/prep-lifecycle-hooks.component';
import { PrepFormsComponent } from './components/prep-forms/prep-forms.component';
import { HttpClientModule } from '@angular/common/http';
import { PrepServiceComponent } from './components/prep-service/prep-service.component';
import { InjectableService } from './services/app-level-injectable.service';
import { FormsModule } from '@angular/forms';
import { ConvertTelNumberPipe } from './pipes/format-tel-number.pipe';
import { ErrorHighlightDirective } from './directives/error-highlight.directive';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ChildAComponent } from './components/prep-routing/various-routings/child-a/child-a.component';
import { ChildBComponent } from './components/prep-routing/various-routings/child-b/child-b.component';
import { ChildDataComponent } from './components/prep-routing/various-routings/child-data/child-data.component';
import { StudentDataService } from './services/student-data.service';
import { PrepRoutingLazyLoadingComponent } from './components/prep-routing/prep-routing-lazy-loading/prep-routing-lazy-loading.component';
import { VariousRoutingsComponent } from './components/prep-routing/various-routings/various-routings.component';

@NgModule({
  declarations: [
    AppComponent,
    PrepObservablesComponent,
    PipesAndDirectivesComponent,
    PrepRoutingComponent,
    PrepLifecycleHooksComponent,
    PrepFormsComponent,
    PrepServiceComponent,
    ConvertTelNumberPipe,
    ErrorHighlightDirective,
    PageNotFoundComponent,
    ChildAComponent,
    ChildBComponent,
    ChildDataComponent,
    PrepRoutingLazyLoadingComponent,
    VariousRoutingsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    PrimeNgImportsModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [PrimeNgImportsModule],
  providers:[InjectableService, StudentDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
