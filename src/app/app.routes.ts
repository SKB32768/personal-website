import { Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SitemapComponent } from './sitemap/sitemap.component';
import { UnderConstructionComponent } from './under-construction/under-construction.component';

export const routes: Routes = [
  {
    component: AboutComponent,
    path: 'about',
    title: 'About'
  }, {
    component: BlogComponent,
    path: 'blog',
    title: 'Blog'
  }, {
    component: ContactComponent,
    path: 'contact',
    title: 'Contact'
  }, {
    component: HomeComponent,
    path: 'home',
    title: 'Home'
  }, {
    component: NewsComponent,
    path: 'news',
    title: 'News'
  }, {
    component: SitemapComponent,
    path: 'sitemap',
    title: 'Sitemap'
  }, {
    component: PageNotFoundComponent,
    path: 'page-not-found',
    title: 'Page not found'
  }, {
    component: UnderConstructionComponent,
    path: 'under-construction',
    title: 'Under construction'
  }, {
    path: '',
    pathMatch: 'full',
    redirectTo: 'under-construction'
  }, {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'page-not-found'
  }
];
