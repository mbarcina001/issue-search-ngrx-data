import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { IssueService } from '../issue.service';
import { Issue } from 'src/app/core/model/issue';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.scss']
})
export class IssuesComponent {

  issues$: Observable<Issue[]>;
  loading$: Observable<boolean>;
  errorMessage$: Observable<any>;

  constructor(private issueService: IssueService) {
    this.issues$ = issueService.entities$;
    this.loading$ = issueService.loading$;
    this.errorMessage$ = issueService.errors$;
  }

  getIssuesByRepo(pRepo: string) {
    this.issueService.getByRepo(pRepo);
  }

}
