import { Inject, HostBinding, HostListener, Component } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'wu-update',
  template: `
    click here to get the latest version.
  `,
  styles: [
    ':host { visibility: hidden }',
    ':host { display: none }',
    ':host { padding: 0 0 20px }',
    ':host { width: 100% }',
    ':host { text-align: center }',
    ':host { cursor: pointer }',
    ':host { text-decoration: underline }',
    ':host { text-transform: capitalize }',
    ':host.on { visibility: visible }',
    ':host.on { display: block }'
  ]
})
export class WuUpdateTag {
  @HostBinding('class.on') on = false;
  constructor(
    @Inject(DOCUMENT) private doc: Document,
    private sw: SwUpdate) {
    sw.available.subscribe(e => {
      this.on = true;
      console.log(e)
      console.log('current version is', e.current);
      console.log('available version is', e.available);
    });
  }
  @HostListener('click') update() {
    this.sw.activateUpdate().then(() => this.doc.location.reload());
  }
}
