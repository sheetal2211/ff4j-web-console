import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BadgesComponent} from './badges.component';
import {Component} from '@angular/core';
import {By} from '@angular/platform-browser';

@Component({
  template: `
    <ff4j-badges [values]='values' [maxToShow]='maxToShow'></ff4j-badges>`
})
class TesteeBadgeComponent {
  values = ['1', '2', '3'];
  maxToShow = 1;
}

describe('BadgesComponent', () => {
  let hostComponent: TesteeBadgeComponent;
  let userComponent: BadgesComponent;
  let fixture: ComponentFixture<TesteeBadgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BadgesComponent, TesteeBadgeComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TesteeBadgeComponent);
    hostComponent = fixture.componentInstance;
    const userDebugElement = fixture.debugElement.query(By.directive(BadgesComponent));
    userComponent = userDebugElement.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(hostComponent).toBeTruthy();
    expect(userComponent).toBeTruthy();
  });

  it('should have propagate the input values for property values and maxToShow', () => {
    // default
    fixture.detectChanges();
    expect(userComponent.values).toEqual(['1', '2', '3']);
    expect(userComponent.maxToShow).toEqual(1);
    // on change should apply
    hostComponent.values = ['4', '5'];
    hostComponent.maxToShow = 2;
    fixture.detectChanges();
    expect(userComponent.values).toEqual(['4', '5']);
    expect(userComponent.maxToShow).toEqual(2);
  });
});
