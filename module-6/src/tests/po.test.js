const { page } = require('../po');

describe('Doctors Page Test Suite', () => {
  beforeEach(async () => {
    await page('dashboard').open(); // -> I open "Dashboard" page
  });

  it('should open page', async () => {
    await expect(browser).toHaveTitle('Appointment Planner - Syncfusion Angular Components Showcase App');
  });

  it.only('should open modal', async () => {
    await page('dashboard').sideMenu.item('doctors').click();
    await page('doctors').doctorListHeader.addNewDoctorBtn.click();
    await expect(page('doctors').addDoctorModal.rootEl).toBeDisplayed();
  });

  it('should add doctor', async () => {
    await page('dashboard').sideMenu.item('doctors').click();

    await page('doctors').doctorListHeader.addNewDoctorBtn.click();
    await expect(page('doctors').addDoctorModal.rootEl).toBeDisplayed();

    await page('doctors').addDoctorModal.input('name').setValue('John Doe');
    await page('doctors').addDoctorModal.input('phone').setValue('1111111111');
    await page('doctors').addDoctorModal.input('email').setValue('test@test.com');
    await page('doctors').addDoctorModal.input('education').setValue('Basic');
    await page('doctors').addDoctorModal.input('designation').setValue('Test');

    await page('doctors').addDoctorModal.saveBtn.click();

    await expect(page('doctors').addDoctorModal.rootEl).not.toBeDisplayed();

    await expect(page('doctors').specialistCard(8).name).toHaveTextContaining('John Doe');
    await expect(page('doctors').specialistCard(8).education).toHaveTextContaining('Basic', {
      ignoreCase: true,
    });
  });

  it('should close modal', async () => {
    await page('dashboard').sideMenu.item('doctors').click();
    await page('doctors').doctorListHeader.addNewDoctorBtn.click();
    await page('doctors').addDoctorModal.closeBtn.click();
    await expect(page('doctors').addDoctorModal.rootEl).not.toBeDisplayed();
  });
});
