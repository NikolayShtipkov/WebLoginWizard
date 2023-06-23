import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingPageComponent } from './modules/pages/landing-page/landing-page.component';
import { VerifyPageComponent } from './modules/pages/verify-page/verify-page.component';

const routes: Routes = [
  { path: 'landing', component: LandingPageComponent, pathMatch: 'full' },
  { path: 'verify', component: VerifyPageComponent, pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
