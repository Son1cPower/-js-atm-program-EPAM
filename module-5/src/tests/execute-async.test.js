describe('execute', () => {
  beforeEach(async () => {
    await browser.url('/showcase/angular/appointmentplanner/#/dashboard');
  });

  it('executeAsync()', async () => {
    await browser.executeAsync(function (done) {
      setTimeout(() => {
        const element = document.querySelector("a[href='#/doctor-details/5']");
        element.style.border = 'red solid 2px';
        done();
      }, 2000);
    });
    await browser.pause(3000);
  });

  it('executeAsync() with params', async () => {
    const doctor = await $("a[href='#/doctor-details/5']");
    await browser.executeAsync(function (doctor, done) {
      setTimeout(() => {
        doctor.style.border = 'red solid 2px';
        done();
      }, 2000);
    }, doctor);
    await browser.pause(3000);
  });

  it('executeAsync() as string', async () => {
    await browser.executeAsync(
      `setTimeout(() => {
                const element = document.querySelector("a[href='#/doctor-details/5']");
                element.style.border = "red solid 2px";
                arguments[0]();
            }, 2000);`,
    );
    await browser.pause(3000);
  });
});
