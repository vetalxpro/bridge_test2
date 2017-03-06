import { BridgeInformTest2Page } from './app.po';

describe('bridge-inform-test2 App', function() {
  let page: BridgeInformTest2Page;

  beforeEach(() => {
    page = new BridgeInformTest2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
