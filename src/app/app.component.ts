import { Component, OnInit } from '@angular/core';
import { TranslateService } from './translate';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public translatedText: string;
  public supportedLanguages: any[];
  public supportedLangs: any[];

  constructor(private _translate: TranslateService) { }

  ngOnInit() {
    // standing data
    this.supportedLangs = [
      { display: 'English', value: 'en' },
      { display: 'Português', value: 'pt' },
      { display: '华语', value: 'zh' },
    ];

    this.subscribeToLangChanged();

    // set language
    this._translate.setDefaultLang('en'); // set English as default
    this._translate.enableFallback(true); // enable fallback

    // set current langage
    this.selectLang('pt');
  }

  isCurrentLang(lang: string) {
    // check if the selected lang is current lang
    return lang === this._translate.currentLang;
  }

  selectLang(lang: string) {
    // set current lang;
    this._translate.use(lang);
  }

  refreshText() {
    // refresh translation when language change
    this.translatedText = this._translate.instant('hello world');
  }

  subscribeToLangChanged() {
    // refresh text
    // please unsubribe during destroy
    return this._translate.onLangChanged.subscribe(x => this.refreshText());
  }

}
