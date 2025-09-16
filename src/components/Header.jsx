import logo from "../assets/logo.svg"
import { useState } from "react";

export default function Header(){
    const [unit, setUnit] = useState('c');

    return(
        <>
            <header>
                <div className="left-side-header">
                    <img id="logo-header" src={logo} alt="" />
                    <p id="title-header" >Weather APP</p>
                </div>
                <div>
                    <select value={unit} onChange={(e) => setUnit(e.target.value)}> 
                        <option value='c' >C</option>
                        <option value='f' >F</option>
                    </select>
                </div>
            </header>

        </>
    )
}