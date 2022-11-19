describe('Module 4: Basic Commands examples', () => {
  beforeEach(async () => {
    await browser.url('/showcase/angular/appointmentplanner/#/doctors');
  });

  it('$ command', async () => {
    console.log('!!!!!!!!!!!!command!!!!!!!!!!!!');
    const baseElement = await $('.specialist-display');
    const childrenElement = await baseElement.$('#Specialist_1');
    // OR
    const element = await $('.specialist-display').$('#Specialist_1');
    console.log(childrenElement);
    console.log(element);
  });

  it('$$ command', async () => {
    console.log('!!!!!!!!!!!!command-2!!!!!!!!!!!!');
    const baseElement = await $('.specialist-display');
    const childrenElements = await baseElement.$$('#Specialist_item');
    // OR
    const elements = await $('.specialist-display').$$('#Specialist_item');
    console.log(childrenElements);
    console.log(elements);
  });

  it('click command', async () => {
    console.log('!!!!!!!!!!!!click command!!!!!!!!!!!!');
    // generally clicks the element
    // await $(".specialist-display").click();
    // clicks 20 horizontal pixels away from the center of the element
    await $('.specialist-display').click({
      x: 20,
    });
    // clicks the right mouse button 30 vertical pixels away from the center of the element
    // await $(".specialist-display").click({button: 2, y: 30});
  });

  it('setValue command', async () => {
    console.log('!!!!!!!!!!!!setValue command!!!!!!!!!!!!');
    await $('.specialization-types button.e-control').click();

    await $('#Name input').setValue('John Doe');
    console.log('Value is: ' + (await $('#Name input').getValue())); // John Doe
    await $('#Name input').setValue('Mr Robot');
    console.log('Value is: ' + (await $('#Name input').getValue())); // Mr Robot
  });

  it('addValue command', async () => {
    console.log('!!!!!!!!!!!!addValue command!!!!!!!!!!!!');
    await $('.specialization-types button.e-control').click();

    await $("input[name='Email']").addValue('test');
    console.log('Value is: ' + (await $("input[name='Email']").getValue())); // test
    await $("input[name='Email']").addValue('@test.com');
    console.log('Value is: ' + (await $("input[name='Email']").getValue())); // test@test.com
  });

  it('isExisting command', async () => {
    await $('.specialist-display').isExisting(); // outputs: true
    await $('#notExisting').isExisting(); // outputs: false
  });

  it('waitForDisplayed command', async () => {
    await $('.specialist-display').waitForDisplayed({
      timeout: 3000,
    });
  });

  it('waitForExist command', async () => {
    await $('.specialist-display').waitForExist(); // true
  });
});
