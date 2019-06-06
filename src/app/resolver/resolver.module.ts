import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ResolverPage } from './resolver.page';
import {GridComponent} from './grid/grid.component';
import {ModalComponent} from './modal/modal.component';
import {SharedModule} from '../shared/shared.module';
import {TooltipsModule} from 'ionic-tooltips';

const routes: Routes = [
  {
    path: '',
    component: ResolverPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    SharedModule,
    TooltipsModule.forRoot()
  ],
  declarations: [
    ResolverPage,
    GridComponent,
    ModalComponent,
  ],
  entryComponents: [
    ModalComponent,
  ]
})
export class ResolverPageModule {}
