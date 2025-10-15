
import { Component } from "@angular/core";
import { HeadBar_Component } from "../../features/head_bar/head_bar";
import { AboutMe_Component } from "../../features/about_me/about_me";
import { Amex_Component } from "../../features/amex_card/amex";


@Component({
    selector: 'app-home-component',
    standalone: true,
    templateUrl: './home.html',
    styleUrl: './home.scss',
    imports: [HeadBar_Component, AboutMe_Component, Amex_Component]
})
export class Home_Component {
}
