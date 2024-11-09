import Header from './header';
import './App.css';
import Footer from './footer';
import { Routes, Route } from 'react-router-dom';
import About from './about';
import Matches from './matches';
import Login from './login';
import Track from './track';
import Setup from './setup';

function App() {
  return (
    <body>
      <Header />
      <div class="content">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/setup" element={<Setup/>}/>
          <Route path="/matches" element={<Matches />} />
          <Route path="/track" element={<Track/>}/>
        </Routes>
      </div>
      <Footer />
    </body>
  );
}

export default App;
