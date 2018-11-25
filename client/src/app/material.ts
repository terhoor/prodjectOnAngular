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
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';





@NgModule({
  imports: [MatButtonModule,
    MatProgressSpinnerModule,
    MatTableModule, MatTabsModule,
    MatCardModule, MatDialogModule,
    MatFormFieldModule, MatInputModule,
    MatSelectModule, MatIconModule,
    MatPaginatorModule, MatSortModule
  ],
  exports: [MatButtonModule,
    MatProgressSpinnerModule,
    MatTableModule, MatTabsModule,
    MatCardModule, MatDialogModule,
    MatFormFieldModule, MatInputModule,
    MatSelectModule, MatIconModule,
    MatPaginatorModule, MatSortModule
  ],
})
export class MaterialModule {
}
