import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
/*import { MaterialModule } from '../material/material.module';*/
import { SharedModule } from 'src/app/shared/shared.module';
import { IssueSearchComponent } from './issue-search/issue-search.component';
import { IssueListComponent } from './issue-list/issue-list.component';
import { IssueService } from './issue.service';
import { IssuesComponent } from './issues/issues.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: IssuesComponent }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [IssuesComponent],
  declarations: [IssuesComponent, IssueSearchComponent, IssueListComponent],
  providers: [IssueService]
})
export class IssuesModule {}