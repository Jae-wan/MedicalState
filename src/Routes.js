import MedicalState from './views/MedicalState';
import DoctorAddPatientView from './views/DoctorView/DoctorAddPatient';
import DoctorLogin from './views/DoctorView/DoctorLogin';
import DoctorPrescription from './views/DoctorView/DoctorPrescription';
import DoctorSearch from './views/DoctorView/DoctorSearch';
import DoctorSignUp from './views/DoctorView/DoctorSignUp';


import QRScan from './views/DrugStoreView/QRScan';
import MedicineCompare from './views/DrugStoreView/MedicineCompare';
import MedicineGuide from './views/DrugStoreView/MedicineGuide';
import Information from './views/DrugStoreView/Information';

<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> ff1fe6c2202f9ce5791d79c350609fe9fcf2b818
=======
>>>>>>> ff1fe6c2202f9ce5791d79c350609fe9fcf2b818
import QRReader from './views/TestView/QRReader';
import CompareTest from './views/TestView/CompareTest';
import TimeTable from './views/TimeTable';

const routes = [
  {
    id: 'TimeTable',
    path: '/timetable',
    exact: true,
    component: TimeTable,
  },
  {
    id: 'main',
    path: '/',
    exact: true,
    component: MedicalState,
  },
  {
    id: 'DoctorLogin',
    path: '/doctorview/login',
    exact: true,
    component: DoctorLogin,
  },
  {
    id: 'DoctorSignUp',
    path: '/doctorview/signup',
    exact: true,
    component: DoctorSignUp,
  },
  {
    id: 'DoctorSearch',
    path: '/doctorview/search',
    exact: true,
    component: DoctorSearch,
  },
  {
    id: 'DoctorAddPatientView',
    path: '/doctorview/addpatientview',
    exact: true,
    component: DoctorAddPatientView,
  },
  {
    id: 'DoctorPrescription',
    path: '/doctorview/prescription',
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
    id: 'information',
    path: '/pharmacist/information',
    exact: true,
    component: Information,
  },
  {
    id: 'prescriptiondescription',
    path: '/patientview/prescriptiondescription',
    exact: true,
    component: PrescriptionDescription,
  },
  {

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

];

export default routes;