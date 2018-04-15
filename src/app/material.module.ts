import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatFormFieldControl,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatToolbarModule
} from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatToolbarModule, MatIconModule, MatGridListModule, MatInputModule, MatFormFieldModule],
  exports: [MatButtonModule, MatToolbarModule, MatIconModule, MatGridListModule, MatInputModule, MatFormFieldModule],
    })

export class MaterialModule { }
