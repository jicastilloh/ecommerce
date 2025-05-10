import { Component } from '@angular/core';
import { routes } from '../../../app.routes';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { interval } from 'rxjs';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  routes =
    routes
      .find((route) => route.title == 'ecommerce')
      ?.children?.filter((child) => child.title != 'ProductInfo')
      ?.map((routeChild) => ({
        title: routeChild.title,
        path: routeChild.path,
      })) ?? [];
}
