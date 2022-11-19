describe('local storage', () => {
  beforeEach(async () => {
    await browser.url('/showcase/angular/appointmentplanner/#/dashboard');
  });

  it('set/get local storage value', async () => {
    const key = 'localStorageKey';
    const value = 'localStorageValue';

    await browser.execute(
      function (key, value) {
        window.localStorage.setItem(key, value);
      },
      key,
      value,
    );

    const readValue = await browser.execute(function (key) {
      return window.localStorage.getItem(key);
    }, key);

    console.log(readValue);
  });
});
