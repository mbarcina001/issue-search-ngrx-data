import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IssueService } from './store/services/issue.service';
import { AppComponent } from './app.component';
import { HttpClientModule, } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { IssuesComponent } from './issues/issues/issues.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { MatProgressSpinnerModule, MatDialogModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FieldErrorComponent } from './components/layout/field-error/field-error.component';
import { DialogComponent } from './components/layout/dialog/dialog.component';
import { AppStoreModule } from './store/app-store.module';
import { IssueSearchComponent } from './issues/issue-search/issue-search.component';
import { IssueListComponent } from './issues/issue-list/issue-list.component';
import { Routes, RouterModule } from '@angular/router';


const MaterialComponents = [
  MatProgressSpinnerModule,
  MatDialogModule
] 

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'issues' },
  {
    path: 'issues',
    loadChildren: () =>
      import('src/app/issues/issues.module').then(m => m.IssuesModule)
  },
];

@NgModule({
  declarations: [
    AppComponent,
    IssuesComponent,
    HeaderComponent,
    FooterComponent,
    FieldErrorComponent,
    DialogComponent,
    AppStoreModule,
    IssueSearchComponent,
    IssueListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    MaterialComponents,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    IssueService,
    ErrorHandler,
  ],
  bootstrap: [AppComponent],
  entryComponents: [DialogComponent],
})
export class AppModule {}
