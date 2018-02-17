import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssessmentComponent } from './components/assessment/assessment.component';

export const routes: Routes = [
    {path: '', redirectTo: '/assessment', pathMatch: 'full'},
    {path: 'assessment', component: AssessmentComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    providers: [],
    exports: [RouterModule]
})

export class AssessmentAppRoutingModule{
    constructor(){

    }
}