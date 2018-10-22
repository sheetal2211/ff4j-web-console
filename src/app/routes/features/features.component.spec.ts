import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FeaturesComponent} from './features.component';
import {FeatureService} from '../../shared/services/feature.service';
import {of, throwError} from 'rxjs';
import {HttpClientModule} from '@angular/common/http';
import {LoggerTestingModule, NGXLogger, NGXLoggerMock} from 'ngx-logger';
import {AgGridModule} from 'ag-grid-angular';
import {FeatureCardModule} from '../../shared/components/feature-card/feature-card.module';
import {Property} from '../../shared/models/Property';

describe('FeaturesComponent', () => {
  let component: FeaturesComponent;
  let fixture: ComponentFixture<FeaturesComponent>;
  let featureService;
  let logger: NGXLoggerMock;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, FeatureCardModule, LoggerTestingModule, AgGridModule.withComponents([])],
      declarations: [FeaturesComponent],
      providers: [FeatureService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturesComponent);
    component = fixture.componentInstance;
    featureService = fixture.debugElement.injector.get(FeatureService);
    logger = fixture.debugElement.injector.get(NGXLogger);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have had requested to get features', () => {
    const serviceResponseData = [
      {
        uid: 'admin',
        enable: false,
        description: 'the admin page',
        group: 'admin',
        permissions: [
          'ROLE_ADMIN'
        ],
        flippingStrategy: {
          type: 'org.ff4j.strategy.PonderationStrategy',
          initParams: {
            weight: '0.0'
          }
        },
        customProperties: {
          'SampleProperty': {
            'name': 'SampleProperty',
            'description': '',
            'type': 'org.ff4j.property.PropertyString',
            'value': 'go!',
            'fixedValues': []
          }
        }
      },
      {
        uid: 'test',
        enable: false,
        description: 'the test page'
      }
    ];
    // The customProperties needs to be transformed to a Map
    const properties = new Map<string, Property>();
    properties.set('SampleProperty', {
      'name': 'SampleProperty',
      'description': '',
      'type': 'org.ff4j.property.PropertyString',
      'value': 'go!',
      'fixedValues': []
    });
    const expectedData = [
      {
        uid: 'admin',
        enable: false,
        description: 'the admin page',
        group: 'admin',
        permissions: [
          'ROLE_ADMIN'
        ],
        flippingStrategy: {
          type: 'org.ff4j.strategy.PonderationStrategy',
          initParams: {
            weight: '0.0'
          }
        },
        customProperties: properties
      },
      {
        uid: 'test',
        enable: false,
        description: 'the test page'
      }
    ];
    spyOn(featureService, 'getFeatures').and.returnValues(of(serviceResponseData));
    spyOn(logger, 'debug').and.callThrough();
    fixture.detectChanges();
    expect(featureService.getFeatures).toHaveBeenCalledTimes(1);
    expect(component.features).toBeDefined();
    expect(JSON.stringify(component.features)).toEqual(JSON.stringify(expectedData));
    component.features.forEach((feature) => {
      if (feature.customProperties) {
        expect(feature.customProperties).toEqual(jasmine.any(Map));
      }
    });
    expect(logger.debug).toHaveBeenCalledWith('Features : ' + JSON.stringify(serviceResponseData));
  });
  it('should log error when getFeatures fails', () => {
    const error = new Error('Unable to handle');
    spyOn(featureService, 'getFeatures').and.returnValue(throwError(error));
    spyOn(logger, 'error').and.callThrough();
    fixture.detectChanges();
    expect(featureService.getFeatures).toHaveBeenCalledTimes(1);
    expect(logger.error).toHaveBeenCalledWith('Unable to fetch features', error);
  });
});
