import { useState } from 'react';
import './App.css';
import Lottie from 'react-lottie';
import animationData from './animation.json';

function App() {
  const [stop, setStop] = useState(true);

  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <Lottie
          options={defaultOptions}
          height={'50vmin'}
          width={'50vmin'}
          isStopped={stop}
          isClickToPauseDisabled={true}
          ariaRole={''}
          eventListeners={[
            {
              eventName: 'complete',
              callback: () => setStop(true),
            },
          ]}
        />
        <button onClick={() => setStop(false)} className='App-button' disabled={!stop}>Start</button>
      </header>
    </div>
  );
}

export default App;
