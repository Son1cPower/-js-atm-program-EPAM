const BaseComponent = require('./base.component');

class Appointments extends BaseComponent {
  constructor() {
    super('.e-card.grid-container');
  }

  get linkBookAppointments() {
    return this.rootEl.$('.link-text');
  }

  get labelTodayskAppointments() {
    return this.rootEl.$('.label-text');
  }
}

module.exports = Appointments;
