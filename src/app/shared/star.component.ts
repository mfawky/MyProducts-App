import { Component, EventEmitter, Input, Output } from "@angular/core";


@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})

export class StarComponent {
    @Input() rating: number = 0;
    cropWidth: number = 75;
    @Output() notify: EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges(): void {
        this.cropWidth = this.rating * 75/5;
    }

    onClick(): void {
        this.notify.emit(`The Clicked Rating is ${this.rating}`);
    }
}