import { NgModule } from '@angular/core';

import { FieldErrorComponent } from './components/layout/field-error/field-error.component';
import { DialogComponent } from './components/layout/dialog/dialog.component';

import { MatProgressSpinnerModule, MatDialogModule } from '@angular/material';
import { CommonModule } from '@angular/common';

const MaterialComponents = [
    MatProgressSpinnerModule,
    MatDialogModule
];

@NgModule({
    imports: [
        CommonModule,
        MaterialComponents
    ],
    declarations: [
        DialogComponent,
        FieldErrorComponent
    ],
    exports: [
        DialogComponent,
        FieldErrorComponent
    ]
})
export class SharedModule {}