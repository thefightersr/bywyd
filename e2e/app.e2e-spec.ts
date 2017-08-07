import { BywydPage } from './app.po';

describe('bywyd App', () => {
  let page: BywydPage;

  beforeEach(() => {
    page = new BywydPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
