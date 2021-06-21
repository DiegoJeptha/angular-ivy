import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ComponentHarness, HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';

import { TvRatingFormComponent } from './tv-rating-form.component';
import { By } from '@angular/platform-browser';

class TvRatingFormHarness extends ComponentHarness {
  static hostSelector = 'app-tv-rating-form';
  protected getButton = this.locatorFor('button');
  getRating = this.locatorFor(NgbRatingHarness);
  async submit() {
    const button = await this.getButton();
    await button.click();
  }
}

class NgbRatingHarness extends ComponentHarness {
  static hostSelector = 'ngb-rating';
  protected getRatings = this.locatorForAll('span:not(.sr-only)');
  async rate(value: number) {
    const ratings = await this.getRatings();
    return ratings[value - 1].click();
  }
}
describe('TvRatingFormComponent', () => {
  let component: TvRatingFormComponent;
  let fixture: ComponentFixture<TvRatingFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        NgbModule,
        ReactiveFormsModule,
      ],
      declarations: [TvRatingFormComponent]
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

  it('should pop an alert on submit', async () => {
    spyOn(window, 'alert');

    const select = fixture.debugElement.query(By.css('select')).nativeElement;
    select.value = 'Lost';
    select.dispatchEvent(new Event('change'));
    fixture.detectChanges();

    const harness = await TestbedHarnessEnvironment.harnessForFixture(fixture, TvRatingFormHarness);
    const rating = await harness.getRating();
    await rating.rate(1);
    await harness.submit();

    expect(window.alert).toHaveBeenCalledWith('{"tvShow":"Lost","rating":1}');
  });
});
