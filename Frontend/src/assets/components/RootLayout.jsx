import Header from "./header/Header";
import Footer from "./footer/Footer";
import { Outlet } from "react-router-dom";

function RootLayout() {
 return (
   <div>
     <Header />
       <Outlet />
     {/* //<Footer/> */}
   </div>
 );
}

export default RootLayout;