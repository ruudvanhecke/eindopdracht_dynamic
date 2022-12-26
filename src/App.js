import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {CustomNavbar} from "./components/navbar";
import {Home} from "./pages/home";


function App() {
    return (
        <>
            <CustomNavbar/>
            <Home/>
        </>

    );
}

export default App;
