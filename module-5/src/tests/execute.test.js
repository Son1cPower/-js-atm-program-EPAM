describe('execute', () => {
  beforeEach(async () => {
    await browser.url('/showcase/angular/appointmentplanner/#/dashboard');
  });

  it('execute()', async () => {
    await browser.execute(function () {
      const element = document.querySelector("a[href='#/doctor-details/5']");
      element.style.border = 'red solid 2px';
    });
    await browser.pause(3000);
  });

  it('execute() with params', async () => {
    const doctor = await $("a[href='#/doctor-details/5']");
    await browser.execute(function (doctor) {
      doctor.style.border = 'red solid 2px';
    }, doctor);
    await browser.pause(3000);
  });

  it('execute() as string', async () => {
    await browser.execute(
      `const element = document.querySelector("a[href='#/doctor-details/5']");
            element.style.border = 'red solid 2px';`,
    );
    await browser.pause(3000);
  });
});
