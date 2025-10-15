
import { Component, inject } from "@angular/core";
import { HeadBar_Component } from "../../features/head_bar/head_bar";
import { GlobalScripts } from "../../../shared/globalScripts.service";


@Component({
    selector: 'app-applications',
    standalone: true,
    templateUrl: './applications.html',
    styleUrls: ['./applications.scss', '../../../shared/globalStyling.scss'],
    imports: [HeadBar_Component]
})
export class Applications_Component
{
    globalScripts = inject(GlobalScripts);

    public appList: [{id: number, name: string, path: string}] = [
        {id: 0, name: "Hearts of Krupp-Stahl", path: "h-o-k-s"}
    ];
}
