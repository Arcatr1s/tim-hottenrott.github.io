
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { HeadBar_Component } from "../../features/head_bar/head_bar";
import { Hoks_Component } from "../../features/hoks/hoks";


@Component({
    selector: 'app-gameview',
    standalone: true,
    templateUrl: './game_view.html',
    styleUrls: ['../../../shared/globalStyling.scss'],
    imports: [HeadBar_Component, Hoks_Component]
})
export class GameView_Component implements OnInit
{
    gamename!: string;

    constructor(private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.route.paramMap.subscribe(params => {
            this.gamename = params.get('gamename')!;
        });
    }
}
