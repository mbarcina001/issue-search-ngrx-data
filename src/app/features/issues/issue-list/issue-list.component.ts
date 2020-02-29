import { Component, Input } from '@angular/core';
import { Issue } from 'src/app/core/model/issue';

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.scss']
})
export class IssueListComponent {

  @Input() issueList: Issue[];
  @Input() isLoading: boolean;
  @Input() errorMessage: string;

}

