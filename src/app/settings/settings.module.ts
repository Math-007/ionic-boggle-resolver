import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SettingsPage } from './settings.page';
import {ResolverPageModule} from '../resolver/resolver.module';
import {RangePipe} from '../shared/range.pipe';
import {SharedModule} from '../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: SettingsPage
  }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes),
        ResolverPageModule,
        SharedModule
    ],
  declarations: [SettingsPage]
})
export class SettingsPageModule {}