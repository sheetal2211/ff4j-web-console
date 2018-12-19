import { FeatureCardComponent } from './feature-card.component';
import { Component } from '@angular/core';
import { Feature } from '../../models/Feature';
import { initContext, TestContext } from '../../../../testing/test.context';
import { MatButtonModule, MatCardModule, MatIconModule, MatSlideToggleModule } from '@angular/material';
import { Property } from '../../models/Property';

@Component({
  template: `
      <ff4j-feature-card [feature]="feature"></ff4j-feature-card>
  `
})
class TesteeFeatureCardComponent {
  feature: Feature = {
    uid: 'Feature_UID',
    description: `Feature Card Description`,
    group: 'Group Name',
    enable: false,
    permissions: ['ROLE_ADMIN', 'ROLE_USER', 'ROLE_ADMIN', 'ROLE_USER']
  };
}

describe('FeatureCardComponent', () => {
  type Context = TestContext<FeatureCardComponent, TesteeFeatureCardComponent>;

  const moduleMetaData = {
    imports: [MatCardModule, MatSlideToggleModule, MatButtonModule, MatIconModule]
  };

  initContext(FeatureCardComponent, TesteeFeatureCardComponent, moduleMetaData);

  it('should create', function(this: Context) {
    this.detectChanges();
    expect(this.hostComponent).toBeTruthy();
    expect(this.testedComponent).toBeTruthy();
  });

  it('should throw error when feature is undefined', function(this: Context) {
    this.testedComponent.feature = undefined;
    expect(() => this.testedComponent.ngOnInit()).toThrow(new Error('feature property cannot be undefined'));
  });

  it('should have got the input value for feature', function(this: Context) {
    this.detectChanges();
    expect(this.testedComponent.feature.uid).toBe('Feature_UID');
    expect(this.testedComponent.feature.description).toBe(`Feature Card Description`);
    expect(this.testedComponent.feature.group).toBe('Group Name');
    expect(this.testedComponent.feature.enable).toBeFalsy();
    expect(this.testedComponent.feature.permissions.length).toEqual(4);
    // on change should apply
    this.hostComponent.feature.enable = true;
    this.detectChanges();
    expect(this.testedComponent.feature.enable).toBeTruthy();
  });

  it('should be able to format and show customProperties in key value', function(this: Context) {
    // The customProperties needs to be transformed to a Map
    const properties = new Map<string, Property>();
    properties.set('SampleProperty', {
      name: 'SampleProperty',
      description: '',
      type: 'org.ff4j.property.PropertyString',
      value: 'go!',
      fixedValues: []
    });
    this.detectChanges();
    let resultValues = this.testedComponent.getPropertiesValues(properties);
    expect(resultValues).toEqual(['SampleProperty = go!']);
    // if customProperties is undefined or empty it should also result in empty
    const testee = undefined;
    resultValues = this.testedComponent.getPropertiesValues(testee);
    expect(resultValues).toEqual([]);
  });
});
