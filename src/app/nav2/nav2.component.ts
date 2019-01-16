import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav2',
  templateUrl: './nav2.component.html',
  styleUrls: ['./nav2.component.scss']
})
export class Nav2Component implements OnInit {
  public hideNavContentsOnMobile = true;

  constructor() { }

  ngOnInit() {
  }

  toggleMenuState(elem): void {
    const currentState: string = elem.currentTarget.getAttribute('data-state');
    this.resetMenuStates(elem.currentTarget.parentElement);
    elem.currentTarget.setAttribute('data-state', currentState === 'open' ? 'closed' : 'open');
  }

  private resetMenuStates(parentElem) {
    [].forEach.call(parentElem.children, function(el) {
      el.setAttribute('data-state', 'closed');
  });
  }
}
