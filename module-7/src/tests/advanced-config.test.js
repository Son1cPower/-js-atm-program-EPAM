describe('Module 7: Advanced Configuration', () => {
  beforeEach(async () => {
    await browser.url('/showcase/angular/appointmentplanner/#/dashboard');
  });

  it('should open page', async () => {
    const pageTitle = await browser.getTitle();
    expect(pageTitle).toEqual('Appointment Planner - Syncfusion Angular Components Showcase App');
  });

  it('should open modal', async () => {
    await $("[routerlink='/doctors']").click();
    await $('.specialization-types button.e-control').click();
    await expect($('#_dialog-content')).toBeDisplayed();
  });

  it('should add doctor', async () => {
    await $("[routerlink='/doctors']").waitForDisplayed();
    await $("[routerlink='/doctors']").click();
    await $('.specialization-types button.e-control').click();
    await $('#Name input').setValue('John Doe');
    await $('input#DoctorMobile').setValue('1111111111');
    await $("input[name='Email']").setValue('test@test.com');
    await $("input[name='Education']").setValue('Basic');
    await $("input[name='Designation']").setValue('Test');
    await $('.button-container button.e-primary').click();
    await expect($('#_dialog-content')).not.toBeDisplayed();

    const card = await $('#Specialist_8');
    await expect(card.$('.name')).toHaveTextContaining('John Doe');
    await expect(card.$('.education')).toHaveTextContaining('Basic', {
      ignoreCase: true,
    });
  });

  it('should close modal', async () => {
    await $("[routerlink='/doctors']").waitForDisplayed();
    await $("[routerlink='/doctors']").click();
    await $('.specialization-types button.e-control').click();
    await $('.button-container button.e-btn:not(.e-primary)').click();
    await expect($('#_dialog-content')).not.toBeDisplayed();
  });
});
