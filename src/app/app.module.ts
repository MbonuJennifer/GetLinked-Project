import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { HeroComponent } from './Components/hero/hero.component';
import { IntroSectionComponent } from './Components/intro-section/intro-section.component';
import { RulesSectionComponent } from './Components/rules-section/rules-section.component';
import { CriteriaSectionComponent } from './Components/criteria-section/criteria-section.component';
import { FAQsComponent } from './Components/faqs/faqs.component';
import { TimelineComponent } from './Components/timeline/timeline.component';
import { PrizesSectionComponent } from './Components/prizes-section/prizes-section.component';
import { PartnersSectionComponent } from './Components/partners-section/partners-section.component';
import { PrivacySectionComponent } from './Components/privacy-section/privacy-section.component';
import { FooterComponent } from './Components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    IntroSectionComponent,
    RulesSectionComponent,
    CriteriaSectionComponent,
    FAQsComponent,
    TimelineComponent,
    PrizesSectionComponent,
    PartnersSectionComponent,
    PrivacySectionComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
