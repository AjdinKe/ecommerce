import { useState } from "react";

const Backdrop = ({children}: any) => {
    return (
        <div className="backdrop"> 
            {children}
        </div>
     );
}
 
export default Backdrop;