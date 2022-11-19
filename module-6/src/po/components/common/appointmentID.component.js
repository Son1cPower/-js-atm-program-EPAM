const BaseComponent = require('./base.component');

class AppointmentID extends BaseComponent {
  constructor(id) {
    super(`tr[aria-rowindex='${id}']`);
  }

  get time() {
    return this.rootEl.$('[aria-colindex="0"]');
  }

  get name() {
    return this.rootEl.$('[aria-colindex="1"]');
  }

  get doctorName() {
    return this.rootEl.$('[aria-colindex="2"]');
  }

  get symptoms() {
    return this.rootEl.$('[aria-colindex="3"]');
  }

  //   /**
  //    * @param appointmentsParameters {'time' | 'name' | 'doctorName'| 'symptoms'}
  //    */
  //   colum(appointmentsParameters) {
  //     const selectors = {
  //       time: '[aria-colindex="0"]',
  //       name: '[aria-colindex="1"]',
  //       doctorName: '[aria-colindex="2"]',
  //       symptoms: '[aria-colindex="3"]',
  //     };
  //     return this.rootEl.$(selectors[appointmentsParameters.toLowerCase()]);
  //   }
}

module.exports = AppointmentID;
