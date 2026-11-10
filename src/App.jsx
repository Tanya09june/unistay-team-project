import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';

function App() {
    return (
        <BrowserRouter>
            <div className="app">
                <Navbar />

                <main className="hero">
                    <h1>Find Your Student Home in Finland</h1>
                    <p>
                        UniStay helps students explore housing
                        options in Helsinki, Espoo and Vantaa.
                    </p>
                    <span className="coming-soon">
            Project Under Development
          </span>
                </main>

                <footer className="footer">
                    <p>UniStay - Student Project</p>
                </footer>
            </div>
        </BrowserRouter>
    );
}

export default App;
