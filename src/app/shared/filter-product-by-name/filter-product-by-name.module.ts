import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterProductByNamePipe } from './filter-product-by-name.pipe';

@NgModule({
	declarations: [FilterProductByNamePipe],
	imports: [CommonModule],
	exports: [FilterProductByNamePipe],
})
export class FilterProductByNameModule {}
