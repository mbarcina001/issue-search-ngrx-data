import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { IssueService } from './store/services/issue.service';
import { AppComponent } from './app.component';
import { HttpClientModule, } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { MatProgressSpinnerModule, MatDialogModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppStoreModule } from './store/app-store.module';
import { Routes, RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';


const MaterialComponents = [
  MatProgressSpinnerModule,
  MatDialogModule
] 

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'issues' },
  {
    path: 'issues',
    loadChildren: () =>
      import('src/app/features/issues/issues.module').then(m => m.IssuesModule)
  },
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule,
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    MaterialComponents,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppStoreModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    RouterModule.forRoot(routes),
    CoreModule
  ],
  providers: [
    IssueService,
    ErrorHandler,
  ],
  bootstrap: [AppComponent],
  entryComponents: [],
})
export class AppModule {}
