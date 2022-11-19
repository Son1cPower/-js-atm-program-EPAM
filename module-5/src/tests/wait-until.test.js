describe('waitUntil', () => {
  beforeEach(async () => {
    await browser.url('https://ej2.syncfusion.com/react/demos/progress-bar/semi-circular/');
  });

  it('waitUntil()', async () => {
    await $('#reLoad').click();
    await browser.waitUntil(async () => (await $('#point1').getText()) === '100%', {
      timeout: 5000,
      interval: 600,
      timeoutMsg: 'not loaded',
    });
  });
});
