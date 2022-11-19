const BaseComponent = require('./base.component');

class SideMenuComponent extends BaseComponent {
  constructor() {
    super('#plannerSiderBar');
  }

  get name() {
    return this.rootEl.$('p.name');
  }

  /**
   * @param name {'dashboard' | 'schedule' | 'doctors'}
   */
  item(name) {
    const selectors = {
      dashboard: '[routerlink="/dashboard"]',
      schedule: '[routerlink="/calendar"]',
      doctors: '[routerlink="/doctors"]',
    };
    return this.rootEl.$(selectors[name.toLowerCase()]);
  }
}

module.exports = SideMenuComponent;
