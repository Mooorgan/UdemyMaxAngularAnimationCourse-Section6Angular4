import { Component } from '@angular/core';
import {
  animate,
  group,
  query,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('panelState', [
      transition(':enter', [
        group([
          // style({
          //   transform: 'translateX(100%)',
          //   opacity: 0,
          // }),
          // animate(300),
          query(':self', [
            style({
              // transform: 'translateY(-300px)',
              opacity: 0,
            }),
            animate(800),
          ]),
          query('.panel-heading', [
            style({
              transform: 'translateY(-300px)',
              opacity: 0,
            }),
            animate(300),
          ]),
          query('.panel-body', [
            style({
              transform: 'translateX(-100%)',
              opacity: 0,
            }),
            animate(300),
          ]),
          query('.panel-footer', [
            style({
              transform: 'translateY(300px)',
              opacity: 0,
            }),
            animate(300),
          ]),
        ]),
      ]),
      transition(':leave', [
        animate(
          200,
          style({
            transform: 'translateX(-100%)',
            opacity: 0,
          })
        ),
      ]),
      transition('* => *', [
        query(
          ':enter',
          [
            style({
              transform: 'scale(1)',
              // transform: 'rotate(0deg)',
            }),
            animate(
              200,
              style({
                transform: 'scale(1.1)',
                // transform: 'rotate(90deg)',
              })
            ),
            animate(100),
          ],
          { optional: true }
        ),
        query('div p,button', [
          animate(
            300,
            style({
              color: 'red',
            })
          ),
          animate(200),
        ]),
      ]),
    ]),
  ],
})
export class AppComponent {
  showPanel = false;
  showParagraph = true;
}
