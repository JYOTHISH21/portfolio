import './App.scss';
import {Routes, Route} from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Project from './components/Project';
function App() {
  return (
    <>
      <Routes>
        <Route path="/portfolio" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='about' index element={<About/>}/>
          <Route path='contact' index element={<Contact/>}/>
          <Route path='project' index element={<Project/>}/>
        </Route>
      </Routes>
    
    </>
  );
}

export default App;
