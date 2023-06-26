import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CodePageComponent } from './modules/pages/code-page/code-page.component';

import { LandingPageComponent } from './modules/pages/landing-page/landing-page.component';
import { VerifyPageComponent } from './modules/pages/verify-page/verify-page.component';

const routes: Routes = [
  { path: 'landing', component: LandingPageComponent, pathMatch: 'full' },
  { path: 'verify', component: VerifyPageComponent, pathMatch: 'full' },
  { path: 'code', component: CodePageComponent, pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
