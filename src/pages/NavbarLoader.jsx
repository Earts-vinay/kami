import NavbarCompanyView from "../components/NavbarCompanyView";
import  Navbar  from  "../components/Navbar" ;


const NavbarLoader = ({ role="propertyView" }) =>{

 const companyView = 'companyView';
const propertyView = 'propertyView';

    if (role === companyView)  {
        return <NavbarCompanyView role={role}  />;
      } else if (role === propertyView) {
        return <Navbar role={role} />;
      } else {
        return <div>No NavBar found for this role</div>;
      }
    };


export default NavbarLoader;