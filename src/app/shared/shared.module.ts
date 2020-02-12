import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core';

import { FieldErrorComponent } from './components/layout/field-error/field-error.component';
import { DialogComponent } from './components/layout/dialog/dialog.component';

import { MatProgressSpinnerModule, MatDialogModule } from '@angular/material';

const MaterialComponents = [
    MatProgressSpinnerModule,
    MatDialogModule
];

@NgModule({
    imports: [
        BrowserModule,
        MaterialComponents,
    ],
    declarations: [
        DialogComponent,
        FieldErrorComponent
    ]
})
export class SharedModule {}