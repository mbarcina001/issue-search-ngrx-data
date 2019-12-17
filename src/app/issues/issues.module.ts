import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
/*import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';*/
import { IssueSearchComponent } from './issue-search/issue-search.component';
import { IssueListComponent } from './issue-list/issue-list.component';
import { IssueService } from './issue.service';
import { IssuesComponent } from './issues/issues.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: IssuesComponent }
];

@NgModule({
  imports: [
    CommonModule,
    /*SharedModule,
    MaterialModule,*/
    RouterModule.forChild(routes)
  ],
  exports: [IssuesComponent],
  declarations: [IssuesComponent, IssueSearchComponent, IssueListComponent],
  providers: [IssueService]
})
export class IssuesModule {}