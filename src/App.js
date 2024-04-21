
import './App.css';
import Navigation from './customer/components/Navigation/Navigation';
import Product from './customer/components/Product/Product';
import Productdetails from './customer/components/Productdetails/Productdetails';
import Footer from './customer/components/footer/footer';
import Homepages from './customer/pages/Homepages/Homepages';


function App() {
  return (
    <div className="">
    <Navigation/>
    
    <div>
         <Homepages/> 
       <Product/>
       <Productdetails/>
    
    <Footer/>
    </div>
    </div>
  );
}

export default App;
