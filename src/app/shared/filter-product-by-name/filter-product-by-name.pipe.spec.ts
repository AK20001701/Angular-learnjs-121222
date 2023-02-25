import { FilterProductByNamePipe } from './filter-product-by-name.pipe';

describe('FilterProductByNamePipe', () => {
	it('create an instance', () => {
		const pipe = new FilterProductByNamePipe();
		expect(pipe).toBeTruthy();
	});
});
