import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultDataServiceConfig, NgrxDataModule } from 'ngrx-data';
import { entityConfig } from './entity/entity-metadata';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgrxDataModule.forRoot(entityConfig),
  ]
})
export class AppStoreModule { }
