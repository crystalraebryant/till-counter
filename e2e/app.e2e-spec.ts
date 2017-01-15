import { TillCounterPage } from './app.po';

describe('till-counter App', function() {
  let page: TillCounterPage;

  beforeEach(() => {
    page = new TillCounterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
