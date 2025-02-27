import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechImageComponent } from './tech-image.component';

describe('TechImageComponent', () => {
  let component: TechImageComponent;
  let fixture: ComponentFixture<TechImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechImageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
