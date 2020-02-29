import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule, } from '@angular/common/http';
import { MatDialogModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { StoreModule } from '@ngrx/store';
import { EntityDataModule, DefaultDataServiceConfig } from '@ngrx/data';
import { entityConfig, defaultDataServiceConfig } from './store/entity/entity-metadata';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

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
    MatDialogModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    CoreModule,
    StoreModule.forRoot({}),
    EntityDataModule.forRoot(entityConfig),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 25 })
  ],
  providers: [{ provide: DefaultDataServiceConfig, useValue: defaultDataServiceConfig }],
  bootstrap: [AppComponent],
  entryComponents: [],
})
export class AppModule {}
