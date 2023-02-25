import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../products/product.interface';

@Pipe({
	name: 'filterProductByName',
})
export class FilterProductByNamePipe implements PipeTransform {
	transform(value: IProduct[], filterName: string): IProduct[] | null | undefined {
		return value.filter(prodict => prodict.name.includes(filterName));
	}
}
