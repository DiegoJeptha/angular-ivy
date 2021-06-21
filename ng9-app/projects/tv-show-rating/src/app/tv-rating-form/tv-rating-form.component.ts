import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TitleService } from '../title.service';

@Component({
  selector: 'app-tv-rating-form',
  templateUrl: './tv-rating-form.component.html',
  styleUrls: ['./tv-rating-form.component.scss']
})
export class TvRatingFormComponent implements OnInit {
  @Input() title: string | null;
  tvShows = [
    { name: 'Better call Saul!' },
    { name: 'Breaking Bad' },
    { name: 'Lost' },
    { name: 'Mad men' }
  ];

  constructor(
    private titleSvc: TitleService
  ) {

  }
  form = new FormGroup({
    tvShow: new FormControl('', Validators.required),
    rating: new FormControl('', Validators.required),
  });

  submit() {
    alert(JSON.stringify(this.form.value));
    this.form.reset();
  }

  ngOnInit() {
    setTimeout(() => {
      this.titleSvc.update('new title!');
    });
  }

}