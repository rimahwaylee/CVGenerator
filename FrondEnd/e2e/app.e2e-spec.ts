import { FrondEndPage } from './app.po';

describe('frond-end App', () => {
  let page: FrondEndPage;

  beforeEach(() => {
    page = new FrondEndPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
