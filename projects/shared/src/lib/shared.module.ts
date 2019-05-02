import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedComponent } from './shared.component';
import { TabsComponent } from './tabs/tabs.component';
import { TabComponent } from './tabs/tab.component';
import { ButtonComponent } from './button/button.component';
import { FormsComponent } from './forms/forms.component';
import { FormsModule } from '@angular/forms';

const sharedComponents = [SharedComponent, ButtonComponent, TabComponent, TabsComponent, FormsComponent];

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [...sharedComponents],
  exports: [...sharedComponents]
})
export class SharedModule {}
