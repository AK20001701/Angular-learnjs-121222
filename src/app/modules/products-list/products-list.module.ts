import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './products-list.component';
import { ProductCardModule } from './product-card/product-card.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { PaginationModule } from '../../shared/pagination/pagination.module';
import { ToJsonModule } from '../../shared/to-json/to-json.module';
import { FilterProductByNameModule } from 'src/app/shared/filter-product-by-name/filter-product-by-name.module';
import { FilterByParamModule } from 'src/app/shared/filter-by-param/filter-by-param.module';

@NgModule({
	declarations: [ProductsListComponent],
	imports: [
		CommonModule,
		ProductCardModule,
		MatProgressSpinnerModule,
		MatIconModule,
		MatButtonModule,
		PaginationModule,
		ToJsonModule,
		FilterProductByNameModule,
		FilterByParamModule,
	],
	exports: [ProductsListComponent],
})
export class ProductsListModule {}
