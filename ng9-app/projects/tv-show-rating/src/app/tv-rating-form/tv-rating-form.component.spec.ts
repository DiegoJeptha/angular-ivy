import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvRatingFormComponent } from './tv-rating-form.component';

describe('TvRatingFormComponent', () => {
  let component: TvRatingFormComponent;
  let fixture: ComponentFixture<TvRatingFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvRatingFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TvRatingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
