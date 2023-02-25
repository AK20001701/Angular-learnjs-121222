import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'filterByParam',
})
export class FilterByParamPipe implements PipeTransform {
	transform(value: any[], filterParamName: any, filterParamValue: any): any[] | null | undefined {
		return value.filter(curr => {
			if (typeof curr[filterParamName] === 'string') {
				return curr[filterParamName].includes(filterParamValue);
			} else {
				return curr[filterParamName] == filterParamValue;
			}
		});
	}
}
