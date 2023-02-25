import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'filterByParam',
})
export class FilterByParamPipe implements PipeTransform {
	transform(value: unknown, ...args: unknown[]): unknown {
		return null;
	}
}
