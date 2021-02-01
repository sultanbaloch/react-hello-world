import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

function Hi(){
  return <div> 
    <div>My name is sultan</div>
    <div> <ol>
      <li>Orange {`6+5 = ${6 + 5 }`} </li>
      <li>Orange {`5+15 = ${5 + 15 }`}</li>
      <li>Orange {`15+15 = ${15 + 15}`}</li>
      <li>Orange {`34 + 16 = ${34 + 16}`}</li>
      </ol></div>

  </div>
}

ReactDOM.render(<Hi />, document.querySelector('#root'))