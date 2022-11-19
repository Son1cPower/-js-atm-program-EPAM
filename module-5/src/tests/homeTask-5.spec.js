const { expect } = require('chai');

describe('Home Task for Module - 5', () => {
  // beforeEach(async () => {
  //   await browser.url('https://ej2.syncfusion.com/react/demos/progress-bar/semi-circular/');
  // });

  it('Scenario that utilizes execute() command', async () => {
    await browser.url('/showcase/angular/appointmentplanner/#/dashboard');

    await browser.execute(async function () {
      const doctor = document.querySelector('a[href="#/doctor-details/1"]');
      doctor.style.border = 'red solid 2px';
      // document.browser.pause(2000)
    });

    await browser.pause(1200);

    await browser.execute(async function () {
      const doctor = document.querySelector('a[href="#/doctor-details/1"]');
      // document.browser.pause(2000)
      doctor.style.border = '';
    });
    await browser.pause(1200);

    await browser.execute(async function () {
      const doctor = document.querySelector('a[href="#/doctor-details/5"]');
      doctor.style.border = 'black solid 2px';
      // document.browser.pause(2000)
    });
    await browser.pause(1200);

    await browser.execute(async function () {
      const doctor = document.querySelector('a[href="#/doctor-details/5"]');
      // document.browser.pause(2000)
      doctor.style.border = '';
    });
    await browser.pause(1200);

    await browser.execute(async function () {
      const doctor = document.querySelector('a[href="#/doctor-details/3"]');
      doctor.style.border = 'green solid 2px';
      // document.browser.pause(2000)
    });
    await browser.pause(1200);

    await browser.execute(async function () {
      const doctor = document.querySelector('a[href="#/doctor-details/3"]');
      // document.browser.pause(2000)
      doctor.style.border = '';
    });
    await browser.pause(1200);

    await browser.execute(async function () {
      // const doctorName = document.querySelector("//span[contains(@class, 'e-headertext') and (text()='Doctor Name')]");

      const totalAppointments = document.querySelector('span.day-event-count');
      totalAppointments.style.color = '#e1d151';
      // totalAppointments.padd = '#151515'
      totalAppointments.textContent = '99';
      totalAppointments.style.color = '#e1d151';
    });
    await browser.pause(2000);
  });

  it('set/get local storage value', async () => {
    await browser.url('/showcase/angular/appointmentplanner/#/dashboard');
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

  it.skip('BONUS Scenario - CUNSTOM DragAndDrop function', async () => {
    await browser.url('/showcase/angular/appointmentplanner/#/calendar');

    const drag = await $('.e-appointment.e-lib.e-draggable[data-id="Appointment_1027"]');
    await browser.execute(async function () {
      const drop = await document.querySelector('td[data-date="1596877200000"]');

      const rect = await drop.getBoundingClientRect();
      window.localStorage.setItem('X', rect.x);
      window.localStorage.setItem('Y', rect.y);
    });

    const x = await browser.execute(function () {
      return window.localStorage.getItem('X');
    });
    const y = await browser.execute(function () {
      return window.localStorage.getItem('Y');
    });
    await console.log('!!!!!! ' + x);
    await console.log('!!!!!! ' + y);

    // await drag.dragAndDrop({ x: `${x}`, y: `${y}` })
    await drag.dragAndDrop({ x: 695, y: 474 });

    await browser.pause(5000);
  });

  it('Scenario that utilizes browser actions 2', async () => {
    await browser.url('https://jqueryui.com/droppable/');

    const iframe = await $('iframe.demo-frame');
    await browser.switchToFrame(iframe);

    const drag = await $('#draggable');
    const drop = await $('#droppable');

    await drag.dragAndDrop(drop);

    await browser.pause(3000);
  });

  it('Scenario that works with cookies and/or local storage', async () => {
    await browser.url('/showcase/angular/appointmentplanner/#/dashboard');

    await browser.setCookies([
      {
        name: 'MyDreamCar',
        value: 'Urus',
      },
    ]);

    const cookie = await browser.getCookies();
    console.log('cookie value');
    const checkCookie = cookie.find(item => item.name === 'MyDreamCar');
    await expect(checkCookie).not.to.be.eql(undefined);
  });

  it('Scenario that utilizes waitUntil() command', async () => {
    await browser.url('https://ej2.syncfusion.com/react/demos/progress-bar/progress-segment/');

    await browser.waitUntil(async () => (await $('#point1').getText()) === '80%', {
      timeout: 8000,
      interval: 600,
      timeoutMsg: 'not loaded',
    });
  });
});
