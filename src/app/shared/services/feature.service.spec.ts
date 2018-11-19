import {getTestBed, TestBed} from '@angular/core/testing';

import {FeatureService} from './feature.service';
import {BaseService} from './base.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';


describe('FeatureService 2', () => {
  let injector: TestBed;
  let featureService: FeatureService;
  let baseService: BaseService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [FeatureService]
    });
    injector = getTestBed();
    featureService = injector.get(FeatureService);
    baseService = injector.get(BaseService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(featureService).toBeTruthy();
  });

  it('should be able to get features', () => {
    const expectedResponse: any[] = [
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
    featureService.getFeatures().subscribe((features) => {
      expect(features.length).toBe(1);
      expect(features).toBe(expectedResponse);
    });
    const req = httpMock.expectOne(baseService.getBaseUrl() + '/ff4j/store/features');
    expect(req.request.method).toBe('GET');
    req.flush(expectedResponse);
  });

  it('should be able to toggle a feature', () => {
    const featureUid = 'awesomeFeature';
    let toggleState = true;
    featureService.toggle(featureUid, toggleState).subscribe();
    httpMock.expectOne(baseService.getBaseUrl() + `/ff4j/store/features/${featureUid}/enable`);

    toggleState = false;
    featureService.toggle(featureUid, toggleState).subscribe();
    httpMock.expectOne(baseService.getBaseUrl() + `/ff4j/store/features/${featureUid}/disable`);
  });
});
