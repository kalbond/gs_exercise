import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

export const assessmentMockData = {
    'assessment': [{
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
    },
    {
        "id": 2,
        "question": "How many in a baker's dozen?",
        "options": [
            {
                "id": 1,
                "option": "10",
                "score": 10
            },
            {
                "id": 2,
                "option": "11",
                "score": 20
            },
            {
                "id": 3,
                "option": "14",
                "score": 20
            },
            {
                "id": 4,
                "option": "13",
                "score": 30
            }
        ],
        "selected": 1
    },
    {
        "id": 3,
        "question": "What is the red planet?",
        "options": [
            {
                "id": 1,
                "option": "Mars",
                "score": 30
            },
            {
                "id": 2,
                "option": "Venus",
                "score": 10
            },
            {
                "id": 3,
                "option": "Mercury",
                "score": 10
            },
            {
                "id": 4,
                "option": "Jupiter",
                "score": 0
            }
        ],
        "selected": 4
    }
]};

export class AssessmentMockDataService{
    getAssessmentQuestions(){
        return Observable.of({});
    }
}