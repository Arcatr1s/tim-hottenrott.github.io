
import { Component, inject } from "@angular/core";
import { Router } from "@angular/router";


@Component({
    selector: 'app-headbar',
    standalone: true,
    templateUrl: './head_bar.html',
    styleUrl: './head_bar.scss'
})
export class HeadBar_Component {
    private router: Router = inject(Router);

  navigator(route: string) {
    this.router.navigate([route]);
  }
}
