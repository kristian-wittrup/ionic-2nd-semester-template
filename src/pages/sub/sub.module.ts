import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SubPage } from './sub';

@NgModule({
  declarations: [
    SubPage,
  ],
  imports: [
    IonicPageModule.forChild(SubPage),
  ],
  entryComponents: [
    SubPage
  ]
})
export class SubPageModule {}
