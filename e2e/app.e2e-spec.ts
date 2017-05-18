import { JcFastPage } from './app.po';

describe('jc-fast App', function() {
  let page: JcFastPage;

  beforeEach(() => {
    page = new JcFastPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
