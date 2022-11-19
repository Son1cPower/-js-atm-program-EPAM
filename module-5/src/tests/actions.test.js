describe('actions', () => {
  it('mouse move', async () => {
    await browser.url('/showcase/angular/appointmentplanner/#/dashboard');
    const row = await $('div.e-responsive-header table[role=grid] tbody tr:first-child');
    await row.moveTo();
    await browser.pause(5000);
  });

  it('perform actions', async () => {
    await browser.url('/showcase/angular/appointmentplanner/#/calendar');
    const slot1 = await $("[data-date='1596373200000']");
    const slot2 = await $("[data-date='1596382200000']");
    const SHIFT = '\uE008';
    await slot1.click();
    await browser.performActions([
      {
        type: 'key',
        id: 'keyboard',
        actions: [
          {
            type: 'keyDown',
            value: SHIFT,
          },
        ],
      },
    ]);
    await slot2.click();
    await browser.pause(500);
    await browser.performActions([
      {
        type: 'key',
        id: 'keyboard',
        actions: [
          {
            type: 'keyUp',
            value: SHIFT,
          },
        ],
      },
    ]);
    await browser.releaseActions();
    await browser.pause(5000);
  });
});
