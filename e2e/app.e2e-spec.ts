import { NgStarwarsPage } from './app.po';

describe('ng-starwars App', () => {
  let page: NgStarwarsPage;

  beforeEach(() => {
    page = new NgStarwarsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
