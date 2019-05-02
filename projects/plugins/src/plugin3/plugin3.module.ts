import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Plugin3Component } from './plugin3.component';
import { SharedModule } from '../../../shared/src/lib/shared.module';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [Plugin3Component],
  entryComponents: [Plugin3Component]
})
export class Plugin3Module {
  static entry = Plugin3Component;
}
