import { Routes } from '@angular/router';


export const routes: Routes = [
    {path:'', loadChildren: () => import('./pages/shop-displays/shop-displays.module').then(m => m.ShopDisplaysModule)}
];
