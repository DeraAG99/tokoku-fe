import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
const Mainpage = ({children}) => {
    return ( 
        <div>
            <Header/>
            <Sidebar/>
            <section>
                {children}
            </section>
        </div>
     );
};
 
export default Mainpage;