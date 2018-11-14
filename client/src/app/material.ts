import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { NgModule } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';




@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatTableModule, MatTabsModule],
  exports: [MatButtonModule, MatCheckboxModule, MatTableModule, MatTabsModule],
})
export class MaterialModule {
}
