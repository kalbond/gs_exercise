import { Component, OnInit } from '@angular/core';
import { QuestionsComponent } from './../questions/questions.component';
import { AssessmentObject, Assessment } from './../../shared/assessment.model';
import { AssessmentDataService } from './../../services/assessment-data.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'app-assessment',
    templateUrl: './assessment.component.html'
})
export class AssessmentComponent implements OnInit{
    assessmentObj: AssessmentObject;
    questions: Assessment[];
    showScore = false;
    score = 0;
    constructor(private _assessmentService: AssessmentDataService){
        
    }

    ngOnInit(){
        const assessmentSub: Subscription = this._assessmentService.getAssessmentQuestions().subscribe(responseData => {
            this.questions = responseData.assessment;
            () => {
                assessmentSub.unsubscribe();
            }
        });
    }
    
    calculateScore(){
        this.showScore = true;
        this.questions.forEach(question => {
            question.options.forEach(option => {
                if(option.id === question.selected){
                    this.score += option.score;
                }
            })
        });
    }
}