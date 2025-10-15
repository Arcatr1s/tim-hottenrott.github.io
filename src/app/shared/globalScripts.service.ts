
import { Injectable, inject } from "@angular/core";
import { Router } from "@angular/router";


@Injectable({
    providedIn: 'root'
})
export class GlobalScripts
{
    protected router = inject(Router);

    navigate(path: string) {
        this.router.navigate([path]);
    }
}
