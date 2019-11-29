import MedicalState from './views/MedicalState';
import DoctorAddPatientView from './views/DoctorAddPatient';
import DoctorLogin from './views/DoctorLogin';
import DoctorPrescription from './views/DoctorPrescription';
import DoctorSearch from './views/DoctorSearch';
import DoctorSignUp from './views/DoctorSignUp';

const routes = [
  {
    id: 'main',
    path: '/',
    exact: true,
    component: MedicalState,
  },
  {
    id: 'DoctorLogin',
    path: '/doctor/login',
    exact: true,
    component: DoctorLogin,
  },
  {
    id: 'DoctorSignUp',
    path: '/doctor/signup',
    exact: true,
    component: DoctorSignUp,
  },
  {
    id: 'DoctorSearch',
    path: '/doctor/search',
    exact: true,
    component: DoctorSearch,
  },
  {
    id: 'DoctorAddPatientView',
    path: '/doctor/addpatientview',
    exact: true,
    component: DoctorAddPatientView,
  },
  {
    id: 'DoctorPrescription',
    path: '/doctor/prescription',
    exact: true,
    component: DoctorPrescription,
  },
];

export default routes;
