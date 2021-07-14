import NB from './components/navbar';
import AbtMe from './components/aboutme';
import Pj from './components/projects';
import Cont from './components/contact';
import Foot from './components/footer';
import './App.css';
import { Component } from 'react';

function App() {
  return (
<div>
<NB/>
<AbtMe/>
<Pj/>
<Foot/>
</div>
  );
}

export default App;
