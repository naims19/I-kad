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
  },
  {
    path: 'admin-page',
    loadChildren: () => import('./admin-page/admin-page.module').then( m => m.AdminPagePageModule)
  },
  {
    path: 'admin-profile',
    loadChildren: () => import('./admin-profile/admin-profile.module').then( m => m.AdminProfilePageModule)
  },
  {
    path: 'admin-color',
    loadChildren: () => import('./admin-color/admin-color.module').then( m => m.AdminColorPageModule)
  },
  {
    path: 'admin-social',
    loadChildren: () => import('./admin-social/admin-social.module').then( m => m.AdminSocialPageModule)
  },
  {
    path: 'abooutme-setup',
    loadChildren: () => import('./abooutme-setup/abooutme-setup.module').then( m => m.AbooutmeSetupPageModule)
  },
  {
    path: 'resume-setup',
    loadChildren: () => import('./resume-setup/resume-setup.module').then( m => m.ResumeSetupPageModule)
  },
  {
    path: 'portfolio-setup',
    loadChildren: () => import('./portfolio-setup/portfolio-setup.module').then( m => m.PortfolioSetupPageModule)
  },
  {
    path: 'pakej-setup',
    loadChildren: () => import('./pakej-setup/pakej-setup.module').then( m => m.PakejSetupPageModule)
  },
  {
    path: 'pakejpage-setup',
    loadChildren: () => import('./pakejpage-setup/pakejpage-setup.module').then( m => m.PakejpageSetupPageModule)
  },
  {
    path: 'contact-setup',
    loadChildren: () => import('./contact-setup/contact-setup.module').then( m => m.ContactSetupPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
