
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import Media from "./components/Media/Media";
import Settings from "./components/Settings/Settings";

function App() {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <div className='wrapper'>
                    <Navbar />
                    <div className='wrapper-content'>
                        <Routes>
                            <Route path="/profile/*" element={<Profile/>}/>
                            <Route path="/dialogs/*" element={<Dialogs/>}/>
                            <Route path="/news/*" element={<News/>}/>
                            <Route path="/media/*" element={<Media/>}/>
                            <Route path="/settings/*" element={<Settings/>}/>
                        </Routes>

                    </div>
                </div>
            </div>
        </BrowserRouter>

    );
}

export default App;
