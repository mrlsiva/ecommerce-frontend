import { Component, OnInit } from '@angular/core';
// import { ApiService, Actor, ApiResponse } from '../api.service';
import { ApiService, Actor, ApiResponse } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  actors: Actor[] = [];
  currentPage = 1;
  totalPages = 1;
  slides = [
    {
      title: 'Welcome to Akroganiq Farms',
      subtitle: 'Experience nature at its best.',
      image: 'assets/images/farm1.jpg',
    },
    {
      title: 'Fresh Produce',
      subtitle: 'Organic and naturally grown.',
      image: 'assets/images/farm2.jpg',
    },
    {
      title: 'Sustainable Farming',
      subtitle: 'Nurturing the land for the future.',
      image: 'assets/images/farm3.jpg',
    },
  ];
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.loadActors();
  }

  loadActors(page: number = 1) {
    this.apiService.getActors(page).subscribe((response: ApiResponse) => {
      this.actors = response.data.data;
      this.currentPage = response.data.current_page;
      // this.totalPages = response.data.last_page;
    });
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.loadActors(this.currentPage + 1);
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.loadActors(this.currentPage - 1);
    }
  }
}
