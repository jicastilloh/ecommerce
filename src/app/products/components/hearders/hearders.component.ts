import { Component, input } from '@angular/core';

@Component({
  selector: 'app-hearders',
  imports: [],
  templateUrl: './hearders.component.html',
})
export class HeardersComponent {
  header = input<string>('All Categories');
}
