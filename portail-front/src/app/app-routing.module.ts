import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { FullLayoutComponent } from "./layouts/full/full-layout.component";
import { ContentLayoutComponent } from "./layouts/content/content-layout.component";

import { Full_ROUTES } from "./shared/routes/full-layout.routes";
import { CONTENT_ROUTES } from "./shared/routes/content-layout.routes";

import { AuthGuard } from './shared/auth/auth-guard.service';
import { EventsComponent } from './pages/full-pages/events/events.component';
import { UpdateComponent } from './pages/content-pages/update/update.component';
import { ShowEventsComponent } from './pages/full-pages/show-events/show-events.component';

const appRoutes: Routes = [
  {
    path: 'update',
    component: UpdateComponent,
    data: { title: 'Update' }
  },

  {
    path: '',
    redirectTo: '/pages/login',
    pathMatch: 'full',
  },
  {
    path: 'eventList',
    component: ShowEventsComponent,
    data: {
      title: 'eventList'
    }
  },
  { path: 'events', component: EventsComponent },
  { path: '', component: FullLayoutComponent, data: { title: 'full Views' }, children: Full_ROUTES, canActivate: [AuthGuard] },
  { path: '', component: ContentLayoutComponent, data: { title: 'content Views' }, children: CONTENT_ROUTES, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}