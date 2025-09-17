import { useState } from "react"
import lupa from "../assets/lupa.svg"

export default function SearchBar({onClickSubmit}){
    const [local, setLocal] = useState('');

    return(
        <div className="searchbox-container">
            <h1>Como o céu está hoje?</h1>
            <div className="search-container">
                <div className="search-box">
                    <span><img id="lupa-img" src={lupa} alt="" /></span>
                    <input value={local} type="text" placeholder="Procure um lugar..." onChange={(e) => setLocal(e.target.value)}/>
                </div>
                <button type="submit" onClick={() => onClickSubmit(local)}>Procurar</button>
            </div>
        </div>
    )
}