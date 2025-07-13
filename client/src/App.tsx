import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./styles/global.css";
import {
    Navbar,
    Home,
    About,
    Skills,
    Work,
    Contact,
    ArrowUp,
} from "./components";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Navbar />
            <main>
                <Home />
                <About />
                <Skills />
                <Work />
                <Contact />
            </main>
            <ArrowUp />
        </>
    );
}

export default App;
