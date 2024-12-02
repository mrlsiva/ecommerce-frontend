import { Component, OnInit } from '@angular/core';
import { ApiService, Actor, ApiResponse } from '../api.service';
import { register } from 'swiper/element/bundle';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  actors: Actor[] = [];
  currentPage = 1;
  totalPages = 1;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.loadActors();
    register();
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
