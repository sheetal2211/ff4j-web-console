import { BadgesComponent } from './badges.component';
import { Component } from '@angular/core';
import { initContext, TestContext } from '../../../../testing/test.context';

@Component({
  template: `
      <ff4j-badges [values]="values" [maxToShow]="maxToShow"></ff4j-badges>
  `
})
class TesteeBadgeComponent {
  values = ['1', '2', '3'];
  maxToShow = 1;
}

describe('BadgesComponent', () => {
  type Context = TestContext<BadgesComponent, TesteeBadgeComponent>;
  initContext(BadgesComponent, TesteeBadgeComponent);

  it('should create', function(this: Context) {
    this.fixture.detectChanges();
    expect(this.hostComponent).toBeTruthy();
    expect(this.testedComponent).toBeTruthy();
  });

  it('should have propagate the input values for property values and maxToShow', function(this: Context) {
    this.fixture.detectChanges();
    expect(this.testedComponent.values).toEqual(['1', '2', '3']);
    expect(this.testedComponent.maxToShow).toEqual(1);
    // on change should apply
    this.hostComponent.values = ['4', '5'];
    this.hostComponent.maxToShow = 2;
    this.detectChanges();
    expect(this.testedComponent.values).toEqual(['4', '5']);
    expect(this.testedComponent.maxToShow).toEqual(2);
  });
});
