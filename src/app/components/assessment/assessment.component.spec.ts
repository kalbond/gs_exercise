import { Observable } from 'rxjs/Observable';
import { AssessmentMockDataService, assessmentMockData } from './../../services/assessment-mock-data.service';
import { Http, ConnectionBackend, RequestOptions } from '@angular/http';
import { AssessmentDataService } from './../../services/assessment-data.service';
import { QuestionsComponent } from './../questions/questions.component';
import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';

import { AssessmentComponent } from './assessment.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { Subscription } from 'rxjs/Subscription';
import { By } from '@angular/platform-browser';


describe('AssessmentComponent', () => {
  let component: AssessmentComponent;
  let fixture: ComponentFixture<AssessmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule],
      declarations: [AssessmentComponent, QuestionsComponent],
      providers: [
        { provide: AssessmentDataService, useClass: AssessmentMockDataService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssessmentComponent);
    component = fixture.componentInstance;
    let assessmentService: any = fixture.debugElement.injector.get(AssessmentDataService);
    spyOn(assessmentService, 'getAssessmentQuestions').and.returnValue(Observable.of(assessmentMockData));
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should calculate score', () => {
    component.calculateScore();
    expect(component.showScore).toBe(true);
    fixture.detectChanges();
    let elm = fixture.debugElement.query(By.css('div[class="score"]'));
    let scoreElement = elm.nativeElement;
    expect(scoreElement.textContent).toContain(`${component.score}`);
  });

});
