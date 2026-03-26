/**
 * TODO: Implement gallery once photos are ready
 * Gallery data for past events.
 * Each event maps to a folder in /public/gallery/<event-slug>/
 * The user will add optimized photos to these folders.
 *
 * To add photos for a new event:
 * 1. Create a folder: /public/gallery/<event-slug>/
 * 2. Add optimized images (jpg/webp, ~800-1200px wide)
 * 3. Add entries to the images array below
 */

export const eventGalleries = {
  'michigan-devfest-2025': {
    eventName: 'Michigan DevFest 2025',
    // Add image paths here after the user optimizes them
    // Example: '/gallery/devfest-2025/IMG_001.jpg'
    images: [],
  },
  'iwd-summit-2025': {
    eventName: 'IWD Innovation Summit 2025',
    images: [],
  },
  'bhm-summit-2025': {
    eventName: 'BHM Innovation Summit 2025',
    images: [],
  },
  'michigan-devfest-2024': {
    eventName: 'Michigan DevFest 2024',
    images: [],
  },
  'iwd-summit-2024': {
    eventName: 'IWD Innovation Summit 2024',
    images: [],
  },
  'bhm-summit-2024': {
    eventName: 'BHM Innovation Summit 2024',
    images: [],
  },
}
