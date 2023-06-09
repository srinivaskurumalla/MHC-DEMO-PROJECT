import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimSearchComponent } from './claim-search.component';

describe('ClaimSearchComponent', () => {
  let component: ClaimSearchComponent;
  let fixture: ComponentFixture<ClaimSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClaimSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClaimSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
