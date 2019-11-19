import React from 'react';

import Timer from './TimerDynamic/Timer';

const milli = 8540000;
function App() {
  return (
    <div className="times">
      
      <Timer time={milli}/>
    </div>
  );
}

export default App;
