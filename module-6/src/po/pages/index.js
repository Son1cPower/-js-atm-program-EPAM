/* eslint-disable no-restricted-syntax */
const DashboardPage = require('./dashboard.page');
const DoctorsPage = require('./doctors.page');

/**
 * @param name {'dashboard' | 'doctors'}
 * @returns {DashboardPage|DoctorsPage}
 */
function page(name) {
  const items = {
    dashboard: new DashboardPage(),
    doctors: new DoctorsPage(),
  };
  return items[name.toLowerCase()];
}

async function waitAndClick(element) {
  await element.waitForClickable();
  await browser.pause(3000);
  await element.click();
}

async function getArrayOfSelectors(arrayOfSelectors) {
  const array = [];
  for (const selectors of arrayOfSelectors) {
    // eslint-disable-next-line no-await-in-loop
    array.push(await selectors.getText());
  }
  return array;
}

module.exports = {
  DashboardPage,
  DoctorsPage,
  page,
  waitAndClick,
  getArrayOfSelectors,
};
