// Import the React and ReactDOM library
import React from 'react';
import ReactDOM from 'react-dom';

// function getButtonText() {
//   return 'Click on me!';
// }

const buttonText = { text: 'Click Me!'}
const labelText = 'Enter Name:';

// Create a react component
const App = () => {
  // const buttonText = 'Click Me!';

    return (
    <div>
      <label className="label" htmlFor="name">
        {labelText}
      </label>
      <input id="name" type="text"/>
      <button style={{ backgroundColor: 'salmon', color: 'white' }}>
        {buttonText.text}
      </button>
    </div>
    );
}

// Take the react component and show it on the screen
ReactDOM.render (
  <App />,
  document.querySelector('#root')
);

//Hot Reload fix
// if (module.hot) {
//     module.hot.accept();
//   }
  