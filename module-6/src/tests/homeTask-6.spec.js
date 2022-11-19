const allureReporter = require('@wdio/allure-reporter').default;
// import allureReporter from "@wdio/allure-reporter"

// const { expect } = require('chai');
const { page, getArrayOfSelectors, waitAndClick } = require('../po');

describe('Home Task for Module - 6', () => {
  beforeEach(async () => {
    await page('dashboard').open();
  });

  it('Scenario that cheked first appointment row ', async () => {
    allureReporter.addFeature('Checked appointment for Amelia Edwards');
    allureReporter.addSeverity('critical');
    allureReporter.addTestId('1 - Test');

    await expect(page('dashboard').appointments.linkBookAppointments).toExist();
    await expect(page('dashboard').appointments.labelTodayskAppointments).toHaveTextContaining("Today's");

    await expect(page('dashboard').appointmentID(0).time).toHaveText('10:30 AM');
    await expect(page('dashboard').appointmentID(0).name).toHaveText('Milka');
    await expect(page('dashboard').appointmentID(0).doctorName).toHaveText('Amelia Edwards');
    await expect(page('dashboard').appointmentID(0).symptoms).toHaveText('Swelling or bruising over a bone, Pain in the injured area');
  });

  it('Check all available doctors and custom metod waitAndClick()', async () => {
    allureReporter.addFeature('All available doctors');
    allureReporter.addSeverity('minor');
    allureReporter.addTestId('2 - Test');

    const expectedDoctors = [
      'Dr.Nembo Lukeni',
      'Dr.Mollie Cobb',
      'Dr.Yara Barros',
      'Dr.Paul Walker',
      'Dr.Amelia Edwards',
      'Dr.Alexa Richardson',
      'Dr.Nout Golstein',
    ];

    await expect(expectedDoctors).toEqual(await getArrayOfSelectors(await page('dashboard').doctorAvailability.availabilityDoctorName));
    await expect(await page('dashboard').doctorAvailability.availabilityTitle).toHaveText("Doctor's Availability");
    await waitAndClick(page('dashboard').doctorAvailability.availabilityLink);
    await browser.pause(2500);
  });
});
