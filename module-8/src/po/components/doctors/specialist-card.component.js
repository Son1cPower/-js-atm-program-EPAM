const BaseComponent = require('../common/base.component');

class SpecialistCardComponent extends BaseComponent {
  constructor(id) {
    super(`#Specialist_${id}`);
  }

  get name() {
    return this.rootEl.$('.name');
  }

  get education() {
    return this.rootEl.$('.education');
  }

  /**
   * @param specialistParameter {'name' | 'education'}
   */
  async checkSpecialistParameter(specialistParameter) {
    if (specialistParameter.toLocaleLowerCase() === 'name') {
      await this.name;
    } else {
      await this.education;
    }
  }
}

module.exports = SpecialistCardComponent;
