describe('cookies', () => {
  beforeEach(async () => {
    await browser.url('/showcase/angular/appointmentplanner/#/dashboard');
  });

  it('setCookies()', async () => {
    await browser.pause(5000);
    await browser.setCookies([
      {
        name: 'customCookie',
        value: '42',
      },
    ]);
    await browser.pause(10000);
  });

  it('getCookies()', async () => {
    await browser.setCookies([
      {
        name: 'customCookie',
        value: '42',
      },
    ]);
    const cookie = await browser.getCookies(['customCookie']);
    console.log('cookie value');
    console.dir(cookie);
  });

  it('deleteCookies()', async () => {
    await browser.setCookies([
      {
        name: 'customCookie',
        value: '42',
      },
    ]);
    await browser.pause(10000);
    await browser.deleteCookies(['customCookie']);
    await browser.pause(10000);
  });
});
