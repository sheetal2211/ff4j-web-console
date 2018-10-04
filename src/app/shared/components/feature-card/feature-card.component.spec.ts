import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FeatureCardComponent} from './feature-card.component';
import {CommonModule} from '@angular/common';
import {MatButtonModule, MatCardModule, MatIconModule, MatSlideToggleModule} from '@angular/material';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

describe('FeatureCardComponent', () => {
  let component: FeatureCardComponent;
  let fixture: ComponentFixture<FeatureCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        MatCardModule,
        MatSlideToggleModule,
        MatButtonModule,
        MatIconModule
      ],
      declarations: [FeatureCardComponent],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
