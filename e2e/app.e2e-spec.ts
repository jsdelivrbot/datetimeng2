import { DatetimePage } from './app.po';

describe('datetime App', () => {
  let page: DatetimePage;

  beforeEach(() => {
    page = new DatetimePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
