import React from "react";
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
