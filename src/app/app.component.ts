import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  protected readonly items = [
    {value: -10000000, count: 3},
    {value: 1000000000, count: 2},
    {value: 2324323434, count: 4},
    {value: 0, count: 0},
    {value: null},
    {value: '-2324323434', count: '1'},
  ];
}
