import { DesignTestComponent } from './design-test/design-test.component';
import { DesignSuiteComponent } from './design-suite/design-suite.component';
import { DesignStepComponent } from './design-step/design-step.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesignComponent } from './design.component';
import {DesignRoutingModule} from './design-routing.module';
import { AngularSplitModule } from 'angular-split';

import { FilterPipe } from '../../helpers/filter.pipes';
import { ReactiveFormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  imports: [
    CommonModule,
    DesignRoutingModule,
    ReactiveFormsModule,
    DragDropModule,
    AngularSplitModule.forRoot(),
  ],
  declarations: [ FilterPipe, DesignComponent, DesignStepComponent, DesignSuiteComponent, DesignTestComponent]
})
export class DesignModule { }
