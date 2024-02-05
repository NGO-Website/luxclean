import { Component, OnInit } from '@angular/core';

interface Review {
  customerName: string;
  date: string;
  feedback: string
}

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss'],
})
export class ReviewsComponent implements OnInit {

  reviews: Review[] = [
    {
      customerName: 'Ashdon O',
      date: 'March 2023',
      feedback: 'Sarai was excellent! Very easy to communicate with, proficient, thorough, and a great energy to bring into your personal space. Definitely will be scheduling more appointments. My home smells and looks spotless.'
    },
    {
      customerName: 'Alice Smith',
      date: 'March 2023',
      feedback: 'Great experience overall. Would definitely recommend to others.'
    },
    // Add more reviews as needed
  ];

  constructor() {}

  ngOnInit(): void {}

  getStars(rating: number): number[] {
    return Array(Math.round(rating)).fill(0);
  }
}
