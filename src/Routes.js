import MedicalState from './views/MedicalState';
import DoctorAddPatientView from './views/DoctorAddPatient';
import DoctorLogin from './views/DoctorLogin';
import DoctorPrescription from './views/DoctorPrescription';
import DoctorSearch from './views/DoctorSearch';
import DoctorSignUp from './views/DoctorSignUp';

import QRScan from './views/DrugStore/QRScan';
import MedicineCompare from './views/DrugStore/MedicineCompare';
import MedicineGuide from './views/DrugStore/MedicineGuide';

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
  {
    id: 'QRScan',
    path: '/pharmacist/qrscan',
    exact: true,
    component: QRScan,
  },
  {
    id: 'MedicineCompare',
    path: '/pharmacist/medicinecompare',
    exact: true,
    component: MedicineCompare,
  },
  {
    id: 'MedicineGuide',
    path: '/pharmacist/medicineguide',
    exact: true,
    component: MedicineGuide,
  },
];

export default routes;