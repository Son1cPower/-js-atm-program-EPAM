/* eslint-disable no-restricted-syntax */
/* eslint-disable */

// import { faker } from '@faker-js/faker';

// const { expect } = require('chai');
// const { describe, beforeEach, it } = require('mocha');

describe('Module 3: WebdriverIO Introduction', () => {
  beforeEach(async () => {
    await browser.url('/showcase/angular/appointmentplanner/#/dashboard');
  });

  it('first test', async () => {
    const doctorsButton = await $("div[routerLink='/doctors']");
    const addNewDoctorButton = await $('.specialization-types button.e-control');
    const doctorNameInput = await $('#Name input');
    await doctorsButton.click();
    await addNewDoctorButton.click();
    await doctorNameInput.setValue('John Doe');
  });

  it('Test-2 edit doctor', async () => {
    await $("div[routerLink='/doctors']").click();
    await $('#Specialist_7').click();
    await $('(//button[@class="e-control e-btn e-lib e-small edit-details"])').click();
    await $('#Name input').setValue('Eric Manuam');
    await $('#patientCheckFemale').click();
    await $("//input[contains (@name, 'Education')]").addValue(', КПИ, УИПА, ХПИ');
    await $("//button[contains(@class, 'e-control e-btn e-lib e-normal e-primary') and (text()='Save') ]").click();
    await expect($('div.basic-detail.info-field-container div.name')).toHaveTextContaining('Eric Manuam');
    await expect($('div.basic-detail.info-field-container div.education')).toHaveText('MS, КПИ, УИПА, ХПИ');
  });

  it('Test-3 add new patient', async () => {
    await $("div[routerLink='/patients']").click();
    await $("//button[contains(@class, 'e-normal add-details') and (text()='Add New Patient')]").click();
    await $("//input[contains (@name, 'Name')]").setValue('patient 1');
    await $("//label[contains(@class, 'e-btn') and (text()='Female') ]").click();
    await $('#PatientMobile').setValue('0509866161');
    await $("//input[contains (@name, 'Email')]").setValue('patient1@mail.com');
    await $("//button[contains(@class, 'e-control e-btn e-lib e-normal e-primary') and (text()='Save')]").click();
    await expect($("//span[contains(@class, 'patient-name') and (text()='patient 1')]")).toHaveText('patient 1');
  });

  it('Test-4 edit appointment', async () => {
    await $("div[routerLink='/calendar']").click();
    await $("//span[contains(@class, 'e-tbar-btn-text') and (text()='Day')]").click();
    await $("//div[contains(@aria-label, 'Laura Begin From Wednesday, August 5, 2020 at 1:00:00 PM')]").click();
    await $("//button[contains(@class, 'e-event-edit e-text-ellipsis e-control e-btn e-lib e-flat e-primary')]").click();
    await $("//input[contains(@class, 'e-location e-field')]").setValue('London');
    await $("//button[contains(@class, 'e-control e-btn e-lib e-primary e-event-save e-flat') and (text()='Save')]").click();
    await expect(
      $("//div[contains(@aria-label, 'Laura Begin From Wednesday, August 5, 2020 at 1:00:00 PM')]//div[contains(@class, 'e-location')]"),
    ).toHaveText('London');
  });

  it.only('Test-5 check all doctors', async () => {
    await browser.url('/showcase/angular/appointmentplanner/#/dashboard');
    //await $("div[routerLink='/doctors']").waitForClickable()
    // await $("div[routerLink='/doctors']").click()
    const doctorsButton = await $("div[routerLink='/doctors']");
    await waitAndClick(doctorsButton); // custom Command

    async function waitAndClick(element) {
      await element.waitForClickable();
      await browser.pause(3000);
      await element.click();
    }

    // await $("div[routerLink='/doctors']").click()
    const expectedDoctors = [
      'Dr. Nembo Lukeni',
      'Dr. Mollie Cobb',
      'Dr. Yara Barros',
      'Dr. Paul Walker',
      'Dr. Amelia Edwards',
      'Dr. Alexa Richardson',
      'Dr. Nout Golstein',
    ];
    const actualDoctors = [];
    const navDoctorLinks = await $$(
      "//div[contains(@class, 'specialist-display')]//div[contains(@id, 'Specialist')]//div[contains(@class, 'name')]",
    );

    for (const link of navDoctorLinks) {
      actualDoctors.push(await link.getText());
    }

    await expect(expectedDoctors).toEqual(actualDoctors);
  });
});
