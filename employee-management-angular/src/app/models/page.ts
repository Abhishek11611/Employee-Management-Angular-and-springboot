// src/app/models/page.ts
export interface Page<T> {
    content: T[]; // List of items
    totalPages: number; // Total number of pages
    totalElements: number; // Total number of items
    size: number; // Number of items per page
    number: number; // Current page number
  }