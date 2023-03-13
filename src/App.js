import React, { Suspense } from 'react';

import Name from './components/Name';

function App() {
  return (
    // <button
    //   type="button"
    //   onClick={() => {
    //     throw Error("Oops, something went wrong !")
    //   }}
    // >
    //   Click to throw error
    // </button>

    <Name />
  )
}

export default App;
