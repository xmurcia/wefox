import { Component, Renderer2, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  public isDarkMode: boolean = false;
  private readonly THEME_KEY = 'theme-preference';

  constructor(
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit(): void {
    this.loadTheme();
  }

  private loadTheme(): void {
    const storedPreference = localStorage.getItem(this.THEME_KEY);
    if (storedPreference) {
      this.isDarkMode = storedPreference === 'dark';
    } else {
      // Check for system preference if no stored preference and window is defined
      if (typeof window !== 'undefined' && window.matchMedia) {
        this.isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
      }
    }
    this.updateTheme();
  }

  private updateTheme(): void {
    if (this.isDarkMode) {
      this.renderer.addClass(this.document.body, 'dark-theme');
    } else {
      this.renderer.removeClass(this.document.body, 'dark-theme');
    }
  }

  public toggleDarkMode(): void {
    this.isDarkMode = !this.isDarkMode;
    this.updateTheme();
    localStorage.setItem(this.THEME_KEY, this.isDarkMode ? 'dark' : 'light');
  }
}
