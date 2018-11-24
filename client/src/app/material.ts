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
import {MatIconModule} from '@angular/material/icon';





@NgModule({
  imports: [MatButtonModule,
    MatProgressSpinnerModule,
    MatTableModule, MatTabsModule,
    MatCardModule, MatDialogModule,
    MatFormFieldModule, MatInputModule,
    MatSelectModule, MatIconModule
  ],
  exports: [MatButtonModule,
    MatProgressSpinnerModule,
    MatTableModule, MatTabsModule,
    MatCardModule, MatDialogModule,
    MatFormFieldModule, MatInputModule,
    MatSelectModule, MatIconModule
  ],
})
export class MaterialModule {
}
