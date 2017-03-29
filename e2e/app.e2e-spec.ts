import { PubPage } from './app.po';

describe('pub App', function() {
  let page: PubPage;

  beforeEach(() => {
    page = new PubPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
