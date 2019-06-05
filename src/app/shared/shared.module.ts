import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RangePipe} from './range.pipe';

@NgModule({
  declarations: [
    RangePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RangePipe
  ]
})
export class SharedModule { }
