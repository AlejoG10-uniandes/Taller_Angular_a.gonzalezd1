import { Component, OnInit } from '@angular/core';
import { Serie } from '../serie';
import { SerieService } from '../serie.service';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css'],
})
export class SerieComponent implements OnInit {
  // ---------
  // Atributos
  // ---------

  // Series array
  series: Array<Serie> = [];

  // Series seasons average
  seasonsAvg = 0;

  constructor(public serieService: SerieService) {}

  getSeries() {
    this.serieService.getSeries().subscribe((series: Serie[]) => {
      this.series = series;
      this.getAvg();
    });
  }

  getAvg() {
    let sum: number = 0;
    this.series.forEach(serie => {
      sum += serie.seasons;
    });
    this.seasonsAvg = sum / this.series.length;
  }

  ngOnInit() {
    this.getSeries();
  }
}
