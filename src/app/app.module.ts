import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { AssessmentAppRoutingModule } from './app-routing.modules';
import { AssessmentComponent } from './components/assessment/assessment.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { AssessmentDataService } from './services/assessment-data.service';

@NgModule({
  declarations: [
    AppComponent,  
    AssessmentComponent, QuestionsComponent, AssessmentComponent
  ],
  imports: [
    BrowserModule, HttpModule, FormsModule, ReactiveFormsModule, AssessmentAppRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [AssessmentDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
