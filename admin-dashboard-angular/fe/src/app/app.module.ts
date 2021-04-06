import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http'

import { AngularMaterialModule } from './angular-material/angular-material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DashComponent } from './dash/dash.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { CardComponent } from './card/card.component';
import { LineChartComponent } from './charts/line-chart/line-chart.component';
import { MonthltyLineChartComponent } from './charts/monthlty-line-chart/monthlty-line-chart.component';
import { VipNonvipChartComponent } from './charts/vip-nonvip-chart/vip-nonvip-chart.component';
import { CatergoryDoughnutChartComponent } from './charts/catergory-doughnut-chart/catergory-doughnut-chart.component';
import { DatinputformComponent } from './datinputform/datinputform.component';
import { GetdatabaseapiService } from './getdatabaseapi.service'
import { ReactiveFormsModule } from '@angular/forms';
import { SeoBarChartComponent } from './charts/seo-bar-chart/seo-bar-chart.component';
import { NonseoBarChartComponent } from './charts/nonseo-bar-chart/nonseo-bar-chart.component'; 

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    DashComponent,
    CardComponent,
    LineChartComponent,
    MonthltyLineChartComponent,
    VipNonvipChartComponent,
    CatergoryDoughnutChartComponent,
    DatinputformComponent,
    SeoBarChartComponent,
    NonseoBarChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    ChartsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    AngularMaterialModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [GetdatabaseapiService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
  
})
export class AppModule { }
