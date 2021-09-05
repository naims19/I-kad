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
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'admin-m',
    loadChildren: () => import('./admin-m/admin-m.module').then( m => m.AdminMPageModule)
  },
  {
    path: 'admin-profile-m',
    loadChildren: () => import('./admin-profile-m/admin-profile-m.module').then( m => m.AdminProfileMPageModule)
  },
  {
    path: 'admin-color-m',
    loadChildren: () => import('./admin-color-m/admin-color-m.module').then( m => m.AdminColorMPageModule)
  },
  {
    path: 'admin-social-m',
    loadChildren: () => import('./admin-social-m/admin-social-m.module').then( m => m.AdminSocialMPageModule)
  },
  {
    path: 'about-setup-m',
    loadChildren: () => import('./about-setup-m/about-setup-m.module').then( m => m.AboutSetupMPageModule)
  },
  {
    path: 'resume-setup-m',
    loadChildren: () => import('./resume-setup-m/resume-setup-m.module').then( m => m.ResumeSetupMPageModule)
  },
  {
    path: 'portfolio-setup-m',
    loadChildren: () => import('./portfolio-setup-m/portfolio-setup-m.module').then( m => m.PortfolioSetupMPageModule)
  },
  {
    path: 'pakej-setup-m',
    loadChildren: () => import('./pakej-setup-m/pakej-setup-m.module').then( m => m.PakejSetupMPageModule)
  },
  {
    path: 'contact-setup-m',
    loadChildren: () => import('./contact-setup-m/contact-setup-m.module').then( m => m.ContactSetupMPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
