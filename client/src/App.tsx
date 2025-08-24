// React 17 이상에서는 import 생략 가능 (설정에 따라 다름)
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
