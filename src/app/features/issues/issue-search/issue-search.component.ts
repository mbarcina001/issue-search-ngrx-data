
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Issue } from 'src/app/core/model/issue';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-issue-search',
  templateUrl: './issue-search.component.html',
  styleUrls: ['./issue-search.component.scss']
})

export class IssueSearchComponent implements OnInit {

  @Input() issueList: Issue[];
  //@Input() isLoading: boolean;
  @Input() errorMessage: string;
  @Output() onSearch = new EventEmitter<string>();

  private _isLoading = new BehaviorSubject<boolean>(false);
  @Input() set isLoading(value) {
        // set the latest value for _data BehaviorSubject
        this._isLoading.next(value);
        console.log(this.isLoading);
    };

    get isLoading() {
        return this._isLoading.getValue();
    }

  constructor(){ }

  ngOnInit() {  }

  public search(myForm: NgForm){
    var data = myForm.value;
    if (myForm.valid) {
      this.onSearch.emit(data.repo);
    }else{
			/* Show errors */
			for(let i in myForm.controls){
					myForm.controls[i].updateValueAndValidity();
					myForm.controls[i].markAsTouched();
			}
		}    
  }

}


