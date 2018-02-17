import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Assessment } from './../../shared/assessment.model';

@Component({
    selector: 'app-questions',
    templateUrl: './questions.component.html'
})
export class QuestionsComponent implements OnInit{
    @Input() questions: Assessment[];
    @Output() checkScoreEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
    questionNumber: number = 1;
    assessmentForm: FormGroup;
    showError: boolean = false;
    constructor(private _formBuilder: FormBuilder){
        this.assessmentForm = this._formBuilder.group({});
    }

    ngOnInit(){
        this.addFormControls();
    }

    addFormControls(){
        if(this.questions.length){
            this.questions.forEach((question, index) => {
                let questionIndex = index + 1;
                this.assessmentForm.addControl('question_'+questionIndex+'_options', new FormControl('', Validators.required));
            });
        }
    }

    previousQuestion(){
        this.questionNumber > 1 ? this.questionNumber = this.questionNumber - 1 : null;
        this.showError = false;
    }

    nextQuestion(){
        if(this.assessmentForm.controls[`question_${this.questionNumber}_options`].valid){
            this.questionNumber < this.questions.length ? this.questionNumber = this.questionNumber + 1 : null;
            this.showError = false;
        }
        else{
            this.showError = true;
        }
    }

    checkScore(){
        if(this.assessmentForm.valid){
            this.showError = false;
            this.checkScoreEvent.next(true);
        }
        else{
            this.showError = true;
        }
    }
    
}
