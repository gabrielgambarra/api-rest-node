import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { ModalModule } from '../modal/modal.module';

@NgModule({
    declarations: [TableComponent],
    imports: [CommonModule, FlexLayoutModule, MatIconModule, ModalModule],
    exports: [TableComponent],
    providers: [],
})
export class TableModule { }