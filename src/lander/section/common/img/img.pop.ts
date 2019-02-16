import {
  HostBinding, HostListener, ElementRef, AfterViewInit,
  Input, Component, Output, EventEmitter } from '@angular/core';

class Model {
  src = '';
  text = '';
}

const keyAction = {
  Escape: 'close',
  ArrowLeft: 'prev',
  ArrowRight: 'next',
};

@Component({
  selector: 'wl-img-pop',
  template: `
  <div class='title'> {{ title }} </div>
  <div class='main'>
    <wb-icon x='co' name='prev' (click)='emit("prev")'></wb-icon>
    <wb-img [src]='src'></wb-img>
    <wb-icon x='co' name='next' (click)='emit("next")'></wb-icon>
  </div>
  <div> {{ text }} </div>
  `,
  styleUrls: ['./img.pop.sass']
})
export class WlImgPop extends Model implements AfterViewInit {
  @Input() title = '';
  @Input() set img(v: Model) {
    Object.assign(this, v);
  }
  @Output() event = new EventEmitter();
  @HostBinding('attr.tabindex') tbi = 0;
  constructor(private el: ElementRef) {
    super();
  }
  ngAfterViewInit() {
    this.el.nativeElement.focus();
  }
  @HostListener('keyup', ['$event']) keyup(e) {
    this.emit(keyAction[e.code]);
  }
  @HostListener('click', ['$event']) close(e) {
    const tag = e.target;
    if (tag.tagName === 'WB-ICON') {
      return;
    }
    this.emit('close');
  }
  emit(action) {
    this.event.emit({ action });
  }
}
