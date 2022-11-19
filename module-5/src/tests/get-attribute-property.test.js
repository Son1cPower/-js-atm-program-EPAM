describe('get attribute/property', () => {
  beforeEach(async () => {
    await browser.url('/showcase/angular/appointmentplanner/#/dashboard');
  });

  it('getAttribute()', async () => {
    const element = await $("a[href='#/doctor-details/5']");
    const href = await element.getAttribute('href');
    console.log(href);
  });

  it('getProperty()', async () => {
    const element = await $("a[href='#/doctor-details/5']");
    const href = await element.getProperty('href');
    console.log(href);
  });
});
