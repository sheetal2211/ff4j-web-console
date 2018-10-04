import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FeaturesComponent} from './features.component';
import {FeatureService} from '../../shared/services/feature.service';
import {of, throwError} from 'rxjs';
import {HttpClientModule} from '@angular/common/http';
import {LoggerTestingModule, NGXLogger, NGXLoggerMock} from 'ngx-logger';
import {AgGridModule} from 'ag-grid-angular';
import {FeatureCardModule} from '../../shared/components/feature-card/feature-card.module';

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
        customProperties: {
          'spring.log.level': {
            'name': 'spring.log.level',
            'description': 'spring log level',
            'type': 'org.ff4j.property.PropertyLogLevel',
            'value': 'DEBUG'
          }
        }
      }
    ];
    spyOn(featureService, 'getFeatures').and.returnValues(of(expectedData));
    spyOn(logger, 'debug').and.callThrough();
    fixture.detectChanges();
    expect(featureService.getFeatures).toHaveBeenCalledTimes(1);
    expect(component.features).toBeDefined();
    expect(JSON.stringify(component.features)).toEqual(JSON.stringify(expectedData));
    expect(logger.debug).toHaveBeenCalledWith('Features : ' + JSON.stringify(expectedData));
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
