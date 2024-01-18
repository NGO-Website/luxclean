import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss'],
})
export class ReviewsComponent implements OnInit {
  angForm: FormGroup;

  reviews: any[] = [];

  constructor(private fb: FormBuilder, private route: Router) {
    this.angForm = this.fb.group({
      name: ['', Validators.required],
      service: ['', Validators.required],
      price: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.reviews = [
      {name: "Shubhranshu", service: "Apartment Cleaning Service", price: "50", description: "Good Service!!"}
    ];
  }

  postData(forms: any) {
    console.log(this.angForm.value);
  }
}
