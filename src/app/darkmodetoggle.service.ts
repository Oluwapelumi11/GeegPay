import { HostBinding, Injectable, computed, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DarkmodetoggleService {

  darkMode = signal<boolean>(true);
  protected readonly darkMode$ = computed(() => this.darkMode());

  setDarkMode() {
    this.darkMode.set(!this.darkMode());
    this.changeChartBackground();
  }

  private changeChartBackground() {
    const chartContainer = document.getElementById('mychart'); // Change this to the actual ID of your chart container
    if (chartContainer) {
      chartContainer.style.backgroundColor = this.darkMode() ? '#E2E8F0' : '#fff'; // Adjust the background color as needed
    }
  }
}