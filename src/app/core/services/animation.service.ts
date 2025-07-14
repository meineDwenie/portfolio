import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AnimationService {
  private observers: Map<string, IntersectionObserver> = new Map();

  setupAnimations(componentId: string, selectors: string): void {
    // Clean up existing observer for this component if it exists
    this.cleanupObserver(componentId);

    // Select all elements that should animate
    const textElements = document.querySelectorAll(selectors);

    // Add the 'text-reveal' class to all elements
    textElements.forEach((element) => {
      element.classList.add('text-reveal');
    });

    // Set up the Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          } else {
            entry.target.classList.remove('visible');
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    // Start observing each element
    textElements.forEach((element) => {
      observer.observe(element);
    });

    // Store the observer
    this.observers.set(componentId, observer);
  }

  cleanupObserver(componentId: string): void {
    if (this.observers.has(componentId)) {
      const observer = this.observers.get(componentId);
      if (observer) {
        observer.disconnect();
      }
      this.observers.delete(componentId);
    }
  }
}
