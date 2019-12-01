import { Component, Input } from '@angular/core';

@Component({
    selector: 'empty-state',
    templateUrl: './empty-state.component.html',
    styleUrls: ['./empty-state.component.scss']
})
export class EmptyStateComponent {
    @Input() query:string;
    @Input() showBtn:Boolean;
    private emptyText:string="Search for top 5 repositories on Gihub by typing in the keywords separated by commas."+
    "\n Example: Ruby,boilerplate";
    constructor() {
    }

    ngOnInit() {
     
    }
    sss(){
        
    }
}
