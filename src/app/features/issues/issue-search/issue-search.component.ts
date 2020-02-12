
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Issue } from 'src/app/core/model/issue';

@Component({
  selector: 'app-issue-search',
  templateUrl: './issue-search.component.html',
  styleUrls: ['./issue-search.component.scss']
})

export class IssueSearchComponent implements OnInit {

  @Input() issueList: Issue[];
  @Input() isLoading: boolean;
  @Input() errorMessage: string;
  @Output() onSearch: EventEmitter<string>

  constructor(){ }

  ngOnInit() {  }

  public search(myForm: NgForm){
    var data = myForm.value;
    if (myForm.valid) {
      this.onSearch.emit(data.repo);
    }else{
			/* Show errores */
			for(let i in myForm.controls){
					myForm.controls[i].updateValueAndValidity();
					myForm.controls[i].markAsTouched();
			}
		}    
  }

}


