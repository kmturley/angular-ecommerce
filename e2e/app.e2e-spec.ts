import { AngularEcommercePage } from './app.po';

describe('angular-ecommerce App', () => {
  let page: AngularEcommercePage;

  beforeEach(() => {
    page = new AngularEcommercePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
