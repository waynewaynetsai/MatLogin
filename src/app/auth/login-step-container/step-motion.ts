import { trigger, transition, query, style, state, animate, stagger, useAnimation, sequence, group } from '@angular/animations';

export const stepSlider = trigger('stepSlider', [
  transition(':increment', [
    group([
      query(':enter', [
        style({
          position: 'absolute',
          transform: 'translate3d(100%, 0, 0)',
        }),
        animate('230ms ease-in', style({
          transform: 'translate3d(0, 0, 0)',
        }),
        )
      ]),
      query(':leave', [
        style({
          transform: 'translate3d(0, 0, 0)',
          opacity: 1
        }),
        animate('230ms ease', style({
          transform: 'translate3d(-100%, 0, 0)',
          opacity: 0
        }))
      ])
    ])
  ]),
  transition(':decrement', [
    // style({ height: '!' }),
    group([
      query(':enter', [
        style({
          position: 'absolute',
          transform: 'translate3d(-100%, 0, 0)',
        }),
        animate('230ms ease-in', style({
          transform: 'translate3d(0, 0, 0)',
        }),
        )
      ]),
      query(':leave', [
        style({
          transform: 'translate3d(0, 0, 0)',
          opacity: 1
        }),
        animate('230ms ease', style({
          transform: 'translate3d(100%, 0, 0)',
          opacity: 0
        }))
      ])
    ]),
  ]),
]);
