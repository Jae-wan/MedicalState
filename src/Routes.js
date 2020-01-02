import MedicalState from './views/MedicalState';
import DoctorAddPatientView from './views/DoctorAddPatient';
import DoctorLogin from './views/DoctorLogin';
import DoctorPrescription from './views/DoctorPrescription';
import DoctorSearch from './views/DoctorSearch';
import DoctorSignUp from './views/DoctorSignUp';

import QRScan from './views/DrugStore/QRScan';
import MedicineCompare from './views/DrugStore/MedicineCompare';
import MedicineGuide from './views/DrugStore/MedicineGuide';
import Information from './views/DrugStore/Information';



import QRReader from './views/TestView/QRReader';
import CompareTest from './views/TestView/CompareTest';

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
  {
<<<<<<< HEAD
    id: 'QRReader',
    path: '/test/qrreader',
    exact: true,
    component: QRReader,
  },
  {
    id: 'CompareTest',
    path: '/test/comparetest',
    exact: true,
    component: CompareTest,
  },
=======
    id: 'information',
    path: '/pharmacist/information',
    exact: true,
    component: Information,
  }
>>>>>>> 2e94860980b9fcfb9ba4acaf9adaa482b01692d1
];

export default routes;