import { Component, signal } from '@angular/core';
import { StatComponent } from './components/stat/stat.component';

@Component({
  selector: 'app-why-choose-us-section',
  imports: [StatComponent],
  templateUrl: './why-choose-us-section.component.html',
})
export class WhyChooseUsSectionComponent {
  stats = signal<string[]>([
    'Free Shipping on Purchases Over $150',
    'Quick and Easy Returns',
    'Personalized Customer Service',
  ]);
}
