import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'portfolio',
    loadChildren: () => import('./portfolio/portfolio.module').then( m => m.PortfolioPageModule)
  },
  {
    path: 'pakej',
    loadChildren: () => import('./pakej/pakej.module').then( m => m.PakejPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'modal',
    loadChildren: () => import('./modal/modal.module').then( m => m.ModalPageModule)
  },
  {
    path: 'homeweb',
    loadChildren: () => import('./homeweb/homeweb.module').then( m => m.HomewebPageModule)
  },
  {
    path: 'aboutme-web',
    loadChildren: () => import('./aboutme-web/aboutme-web.module').then( m => m.AboutmeWebPageModule)
  },
  {
    path: 'resume-web',
    loadChildren: () => import('./resume-web/resume-web.module').then( m => m.ResumeWebPageModule)
  },
  {
    path: 'portfolio-web',
    loadChildren: () => import('./portfolio-web/portfolio-web.module').then( m => m.PortfolioWebPageModule)
  },
  {
    path: 'project-modal',
    loadChildren: () => import('./project-modal/project-modal.module').then( m => m.ProjectModalPageModule)
  },
  {
    path: 'pakej-web',
    loadChildren: () => import('./pakej-web/pakej-web.module').then( m => m.PakejWebPageModule)
  },
  {
    path: 'contact-web',
    loadChildren: () => import('./contact-web/contact-web.module').then( m => m.ContactWebPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
