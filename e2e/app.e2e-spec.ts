import { CVGeneratorAppPage } from './app.po';

describe('cvgenerator-app App', () => {
  let page: CVGeneratorAppPage;

  beforeEach(() => {
    page = new CVGeneratorAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
