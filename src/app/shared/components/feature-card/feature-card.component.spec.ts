import {FeatureCardComponent} from './feature-card.component';
import {Component} from '@angular/core';
import {Feature} from '../../models/Feature';
import {initContext, TestContext} from '../../../../testing/test.context';
import {MatButtonModule, MatCardModule, MatIconModule, MatSlideToggleModule} from '@angular/material';

@Component({
    template: `<ff4j-feature-card [feature]='feature'></ff4j-feature-card>`
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
    const moduleMetaData: any = {
        MatCardModule,
        MatSlideToggleModule,
        MatButtonModule,
        MatIconModule
    };
    initContext(FeatureCardComponent, TesteeFeatureCardComponent, moduleMetaData);

    it('should create', function (this: Context) {
        this.fixture.detectChanges();
        expect(this.hostComponent).toBeTruthy();
        expect(this.testedComponent).toBeTruthy();
    });

    it('should have got the input value for feature', function(this: Context) {
        this.fixture.detectChanges();
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
});
