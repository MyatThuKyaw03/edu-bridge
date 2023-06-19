import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonsRoutingModule } from './commons-routing.module';
import { FormGroupComponent } from './widgets/form-group/form-group.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [CommonModule, CommonsRoutingModule, ReactiveFormsModule],
  exports: [],
})
export class CommonsModule {}
