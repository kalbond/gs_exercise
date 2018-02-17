import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';

import { QuestionsComponent } from './questions.component';
import { Assessment } from '../../shared/assessment.model';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('AssessmentQuestionComponent', () => {
  let component: QuestionsComponent;
  let fixture: ComponentFixture<QuestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule],
      declarations: [QuestionsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionsComponent);
    component = fixture.componentInstance;
    component.questions = [{
      "id": 1,
      "question": "What is 2+2?",
      "options": [
          {
              "id": 1,
              "option": "3",
              "score": 20
          },
          {
              "id": 2,
              "option": "4",
              "score": 30
          },
          {
              "id": 3,
              "option": "1",
              "score": 10
          },
          {
              "id": 4,
              "option": "8",
              "score": 0
          }
      ],
      "selected": 2
  }];
    component.ngOnInit();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should take to next question', () => {
    component.nextQuestion();
    fixture.detectChanges();
    expect(component.questionNumber).toBe(component.questions[component.questionNumber-1].id);
  });

  it('should take to previous question', () => {
    component.previousQuestion();
    fixture.detectChanges();
    expect(component.questionNumber).toBe(component.questions[component.questionNumber-1].id);
  });

  it('submit form', fakeAsync(() => {
    fixture.detectChanges();
    component.assessmentForm.controls[`question_${component.questionNumber}_options`].setValue(2);
    expect(component.assessmentForm.valid).toBe(true);
    expect(component.questions.length).toBe(component.questionNumber);
  }));

});
