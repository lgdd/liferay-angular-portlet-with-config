import {Component, Input} from '@angular/core';

@Component({
  template: `
    <h1>{{ config.heroName }}</h1>
    <h2>{{ config.heroId }}</h2>
  `,
})
export class AppComponent {

  @Input('config') config;
}
