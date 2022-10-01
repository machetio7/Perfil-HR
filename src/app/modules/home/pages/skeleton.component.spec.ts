import { ComponentFixture, TestBed } from '@angular/core/testing';

import { skeletonComponent } from './skeleton.component';

describe('HomeComponent', () => {
  let component: skeletonComponent;
  let fixture: ComponentFixture<skeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ skeletonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(skeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
