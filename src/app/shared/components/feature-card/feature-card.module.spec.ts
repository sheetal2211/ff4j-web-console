import { FeatureCardModule } from './feature-card.module';

describe('FeatureCardModule', () => {
  let featureCardModule: FeatureCardModule;

  beforeEach(() => {
    featureCardModule = new FeatureCardModule();
  });

  it('should create an instance', () => {
    expect(featureCardModule).toBeTruthy();
  });
});
