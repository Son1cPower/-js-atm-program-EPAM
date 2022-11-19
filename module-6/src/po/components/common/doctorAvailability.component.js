const BaseComponent = require('./base.component');

class DoctorAvailability extends BaseComponent {
  constructor() {
    super('div.doctor-availability');
  }

  get availabilityTitle() {
    return this.rootEl.$('.header-text');
  }

  get availabilityLink() {
    return this.rootEl.$('.all-text');
  }

  get availabilityDoctorName() {
    return this.rootEl.$$('.doctor-name');
  }
}

module.exports = DoctorAvailability;
