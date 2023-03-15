import { useRef, useState } from "react";
import styles from "../src/styles/Home.module.css"
import Backdrop from "./Backdrop";
import Popup from "reactjs-popup";


const Sidebar = () => {
    const [close, setClose] = useState(true)
    const [counter, setCounter] = useState(0)
    const ref = useRef()
    
    
    return ( 
        <Backdrop>
            <div className="sidebar">
                <h1>Sidebar works!</h1>
            </div>
        </Backdrop>
     );
}
 
export default Sidebar;