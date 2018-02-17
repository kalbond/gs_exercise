export interface AssessmentObject{
    assessment: Assessment[]
}

export interface Assessment{
    id: number;
    question: string;
    options: Options[];
    selected: number;
}

export interface Options{
    id: number;
    option: string;
    score: number;
}