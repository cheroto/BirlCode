import { Component } from '@angular/core';

@Component({
    selector: 'rm-facts',
    templateUrl: './fact.component.html'
})

export class FactComponent {
    pageTitle: string = 'Fact Component';
    currentFact: string = 'Studies show that bros who follow the Birl Code have 32.677% more mass gain during the first three months of working out.'

};