import { InjectionToken } from '@angular/core';

export const platformWindow = new InjectionToken<Window>('PLATFORM_WINDOW', {
  providedIn: 'root',
  factory() {
    return window;
  }
});

