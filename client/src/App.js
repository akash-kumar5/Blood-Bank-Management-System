import './index.css'
import Header from './Folder/Header';
import Footer from './Folder/Footer';
import Home from './Folder/Home';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import About from './Folder/About';
import RegisterDonor from './Folder/Register';
import Eligible from './Folder/Eligible';
import Bloodcamp from './Folder/Bloodcamp';
import DonorLogin from './Folder/DonorLogin';
import BloodStock from './Folder/BloodStock';
import BloodBank from './Folder/BloodBank';
import PostRequest from './Folder/PostRequest';
import Login from './Folder/Login';
import Signup from './Folder/Signup';
import OrganizeDrive from './Folder/OrganizeDrive';
import FbForm from './Folder/FbForm';
import FindDonor from './Folder/FindDonor';
import Feedback from './Folder/Feedback';
import BloodBankLogin from './Folder/BBLogin';
import AddBloodBank from './Folder/AddBB';
import ScrollToTop from './Folder/ScrollToTop';
function App() {
  return (
    <BrowserRouter>
    <Header />
    <ScrollToTop />
    <Feedback />
    <Routes>
      <Route path='/' element={<Home />} />

      <Route path='/src/Folder/About.js' element={<About />} />
      <Route path='/Register' element={ <RegisterDonor />}/>
      <Route path='/src/Folder/Eligible.js' element={<Eligible />} />
      <Route path='/src/Folder/Bloodcamp.js' element={<Bloodcamp />} />
      <Route path='/src/Folder/DonorLogin.js' element={<DonorLogin />} />
      <Route path='/src/Folder/BloodStock.js' element={<BloodStock />} />
      <Route path='/src/Folder/BloodBank.js' element={<BloodBank />} />
      <Route path='/src/Folder/PostRequest.js' element={<PostRequest />} />
      <Route path='/Login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/src/Folder/OrganizeDrive.js' element={<OrganizeDrive />} />
      <Route path='/src/Folder/Feedback.js' element={<Feedback />} />
      <Route path='/FbForm.js' element={<FbForm />} />
      <Route path='/src/Folder/FindDonor.js' element={<FindDonor />} />
      <Route path='/BloodBankLogin' element={<BloodBankLogin />} />
      <Route path='/AddBloodBank' element={<AddBloodBank />} />
    </Routes>
    <Footer />
    </BrowserRouter>
  )
}

export default App;
