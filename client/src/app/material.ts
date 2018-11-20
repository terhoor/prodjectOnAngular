import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { NgModule } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';





@NgModule({
  imports: [MatButtonModule,
    MatProgressSpinnerModule,
    MatTableModule, MatTabsModule,
    MatCardModule, MatDialogModule,
    MatFormFieldModule, MatInputModule,
    MatSelectModule,
  ],
  exports: [MatButtonModule,
    MatProgressSpinnerModule,
    MatTableModule, MatTabsModule,
    MatCardModule, MatDialogModule,
    MatFormFieldModule, MatInputModule,
    MatSelectModule,
  ],
})
export class MaterialModule {
}
