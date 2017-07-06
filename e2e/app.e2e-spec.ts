import { AngularEcommercePage } from './app.po';

describe('angular-ecommerce App', () => {
  let page: AngularEcommercePage;

  beforeEach(() => {
    page = new AngularEcommercePage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
