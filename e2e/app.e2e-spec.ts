import { CEPLegalPage } from './app.po';

describe('ceplegal App', () => {
  let page: CEPLegalPage;

  beforeEach(() => {
    page = new CEPLegalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
