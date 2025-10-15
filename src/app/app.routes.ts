import { Routes } from '@angular/router';
import { Home_Component } from './components/pages/home/home';
import { Applications_Component } from './components/pages/applications/applications';
import { GameView_Component } from './components/pages/game_view/game_view';

export const routes: Routes = [
    {
        path: "",
        component: Home_Component,
        title: "Tim Hottenrott"
    },
    {
        path: "apps",
        component: Applications_Component,
        title: "Applications"
    },
    {
        path: "apps/:name",
        component: GameView_Component
    }
];
