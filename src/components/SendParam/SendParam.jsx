import { createContext, useState } from "react";
import Section from "./Section";

export const Name = createContext(null)

export default function SendParam() {
    const [name, setname] = useState("");
    return (
        <div>
            <input type="text" placeholder="name" onChange={(event) => setname(event.target.value)} />
            <Name.Provider value={name} >
                <Section />
            </Name.Provider>
        </div>
    )
}



