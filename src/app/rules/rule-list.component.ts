import {Component} from '@angular/core';
import {IRule} from './rule';

@Component({
    selector: 'rm-rules',
    templateUrl: './rule-list.component.html'
})

export class RuleListComponent {
    pageTitle: string = 'Rule List';
    filteredRules: IRule[];
    _filter: string;
    get filter(): string{
        return this._filter;
    }
    set filter(value: string){
        this._filter = value;
        this.filteredRules = this._filter ? this.filterRules(this.filter) : this.rules;
    }

    constructor(){
        this.rules = this._mockRules;
        this.filteredRules = this._mockRules;
        this.filter = "";
    }

    rules: IRule[];

    filterRules(filterText: string): IRule[]{
        filterText = filterText.toLocaleLowerCase();
        return this.rules.filter((rule: IRule) => rule.ruleDescription.toLocaleLowerCase().indexOf(filterText) != -1); 
        ;
    }

    _mockRules: IRule[] = [
        {
            "ruleId": 1,
            "ruleDescription": "A bro must always say Biiiirl at least once a day to their significant other."
        },
        {
            "ruleId": 4,
            "ruleDescription": "If a bro has bought you a game, you have he obligation of playing it when asked. There is no exception to this rule."
        }
    ]
}