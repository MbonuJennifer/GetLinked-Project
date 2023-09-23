import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'


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
import { HomeComponent } from './Pages/home/home.component';
import { PageNotFoundComponent } from './Pages/page-not-found/page-not-found.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { RegisterComponent } from './Pages/register/register.component';
import { RegisterFormComponent } from './Components/register-form/register-form.component';
import { ContactFormComponent } from './Components/contact-form/contact-form.component';
import { SuccessComponent } from './Components/success/success.component';

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
    FooterComponent,
    HomeComponent,
    PageNotFoundComponent,
    ContactComponent,
    RegisterComponent,
    RegisterFormComponent,
    ContactFormComponent,
    SuccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
