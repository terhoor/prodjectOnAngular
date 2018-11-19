import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { NgModule } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';




@NgModule({
  imports: [MatButtonModule, MatProgressSpinnerModule, MatTableModule, MatTabsModule, MatCardModule],
  exports: [MatButtonModule, MatProgressSpinnerModule, MatTableModule, MatTabsModule, MatCardModule],
})
export class MaterialModule {
}
