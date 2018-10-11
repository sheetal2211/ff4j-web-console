import { BadgesModule } from './badges.module';

describe('BadgesModule', () => {
  let badgesModule: BadgesModule;

  beforeEach(() => {
    badgesModule = new BadgesModule();
  });

  it('should create an instance', () => {
    expect(badgesModule).toBeTruthy();
  });
});
