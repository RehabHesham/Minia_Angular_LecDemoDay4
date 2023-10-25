import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AttributeDirectivesComponent } from './components/attribute-directives/attribute-directives.component';
import { FormsModule } from '@angular/forms';
import { FormValidationComponent } from './components/form-validation/form-validation.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AsideComponent } from './components/aside/aside.component';
import { HomeComponent } from './components/home/home.component';
import { ChildComponent } from './components/child/child.component';
import { StudentsComponent } from './components/ParentToChild/students/students.component';
import { StudentDetailsComponent } from './components/ParentToChild/student-details/student-details.component';
import { Child2Component } from './components/child2/child2.component';
import { ComponentLifeCycleComponent } from './components/component-life-cycle/component-life-cycle.component';

@NgModule({
  declarations: [
    AppComponent,
    AttributeDirectivesComponent,
    FormValidationComponent,
    NavbarComponent,
    FooterComponent,
    AsideComponent,
    HomeComponent,
    ChildComponent,
    StudentsComponent,
    StudentDetailsComponent,
    Child2Component,
    ComponentLifeCycleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
