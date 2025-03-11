import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryLocationComponent } from './country-location.component';

describe('CountryLocationComponent', () => {
  let component: CountryLocationComponent;
  let fixture: ComponentFixture<CountryLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountryLocationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountryLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
