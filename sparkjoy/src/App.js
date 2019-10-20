import React , {Component} from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import './App.css';
import Navbar from './components/navs/Navbar'
import LandingPage from './components/home/Landingpage'
import Contact from './components/Contact'
import Footer from './components/navs/Footer'
import DashboardGiftee from './components/dashboard/DashboardGiftee'
import Itemdetails from './components/page/Itemdetails'
import Donationcreate from './components/page/Donationcreate';
import Signin from './components/login/Signin'
import SignUp from './components/login/SignUp'
import Gifteecreate from "./components/productPage/Gifteecreate"
import  Productdetails from './components/page/Productdetails'
import Productlist from './components/page/productlist'
import DashboardWishList from './components/dashboard/DashboardWishList';

// import logo from './images/logo.jpeg'
// import Landingpage from './components/Landingpage';
class App extends Component {
  render(){
    return(
     <React.Fragment>
      
       <Navbar />
          
       <Switch>
         <Route exact path="/" component={LandingPage} />
         <Route path ="/contact" component= {Contact} />
         <Route path="/Giftee" component = {DashboardGiftee} />
         <Route path= "/donation/:id" component={Itemdetails} />
         <Route path= "/wishlist/:id" component={Productdetails} />
         <Route path='/signin' component={Signin} />
         <Route path='/signup' component={SignUp} />
         <Route path='/donationcreate' component={Donationcreate} />
         <Route path='/create' component={Donationcreate} />
         <Route path='/requestcreate' component={Gifteecreate}/>
         <Route path='/wishlist' component={DashboardWishList} />
       </Switch>
       <Footer /> 
     
     
     </React.Fragment>

    );
  }

}
    

export default App;
