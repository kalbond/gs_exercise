import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AssessmentDataService{
    constructor(private _http: Http){

    }

    getAssessmentQuestions(){
        return this._http.get('./assets/data/data.json').map(response => response.json());
    }
}