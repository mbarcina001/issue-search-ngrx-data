import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { IssueSearchComponent } from './issue-search/issue-search.component';
import { IssueListComponent } from './issue-list/issue-list.component';
import { IssueService } from './issue.service';
import { IssuesComponent } from './issues/issues.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: IssuesComponent }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild(routes),
    MatProgressSpinnerModule,
  ],
  exports: [IssuesComponent],
  declarations: [IssuesComponent, IssueSearchComponent, IssueListComponent],
  providers: [IssueService]
})
export class IssuesModule {}