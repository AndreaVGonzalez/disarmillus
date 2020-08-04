import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ZineunoComponent } from './pages/zineuno/zineuno.component';
import { HomeComponent } from './pages/home/home.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  
  { path: 'nosotros', component: NosotrosComponent},
  { path: 'zineuno', component: ZineunoComponent},

  { path: '**', component: NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
