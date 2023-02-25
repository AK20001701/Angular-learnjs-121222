import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
	selector: '[appEndlessScroll]',
})
export class EndlessScrollDirective {
	//TODO Отправлять событие о загрузке вверх или вниз

	@Output()
	loadDataEvent = new EventEmitter<string>();

	@HostListener('scroll', ['$event'])
	onScroll(event: any) {
		const tracker = event.target;

		const limit = tracker.scrollHeight - tracker.clientHeight;

		if (limit - event.target.scrollTop === 100) {
			this.loadDataEvent.emit('down');
		}

		if (event.target.scrollTop === 100) {
			this.loadDataEvent.emit('up');
		}
	}
}
