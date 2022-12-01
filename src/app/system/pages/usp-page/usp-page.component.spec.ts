import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UspPageComponent } from './usp-page.component';

describe('UspPageComponent', () => {
  let component: UspPageComponent;
  let fixture: ComponentFixture<UspPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UspPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UspPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
