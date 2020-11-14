import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public folder: string;
  public slideOptsOne: any = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: true,
    centeredSlides: true,
    speed: 400,
  };
  public offerList = [
    {
      dealImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSZoWJQfJH27uLzD9ixyzTs79AbK1FF8VnJDg&usqp=CAU'
    },
    {
      dealImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSZoWJQfJH27uLzD9ixyzTs79AbK1FF8VnJDg&usqp=CAU'
    }
  ]

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

}
