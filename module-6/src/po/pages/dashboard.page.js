const BasePage = require('./base.page');
const { SideMenu, AppointmentID, Appointments, DoctorAvailability } = require('../components');

class DashboardPage extends BasePage {
  constructor() {
    super('/showcase/angular/appointmentplanner/#/dashboard');
    this.sideMenu = new SideMenu();
    this.appointments = new Appointments();
    this.doctorAvailability = new DoctorAvailability();
  }

  appointmentID(id) {
    return new AppointmentID(id);
  }
}

module.exports = DashboardPage;
