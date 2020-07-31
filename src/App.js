import React, { useState } from 'react';
import {useTransition, animated} from 'react-spring';
import './App.css';

function App() {
  const [show, setShow] = useState(false);
  const transitions = useTransition(show, null, {
    from: { 
      opacity: 1,
      transform: 'scale(0)' },
    enter: { opacity: 0, transform: 'scale(1)', },
    leave: { opacity: 0, },
  });

  return (
    <div className="App">
      Hello, I am a philosopher poet who works with computation and interaction. 
      <br /><br />
      Wanna see?
      2+2 = {show ? 4 : <button onClick={() => setShow(true)}>?</button>}
      {transitions.map(({ item, props, key }) =>
        item && <>
          <div className="anim one"><animated.div style={props}>woaw</animated.div></div>
          <div className="anim two"><animated.div style={props}>amazing</animated.div></div>
        </>
      )}
      
    </div>
  );
}

export default App;
