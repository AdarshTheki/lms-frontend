import React, { useEffect } from 'react';

import { toast } from 'react-hot-toast';
import Footer from './components/Footer';

const App = () => {
  useEffect(() => {
    toast.success('Welcome website');
  }, []);
  return (
    <div>
      <h1>Hellow</h1>
      <button class='inline-block cursor-pointer rounded-md bg-gray-800 px-4 py-3 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-900'>
        Button
      </button>
      <Footer/>
    </div>
  );
};

export default App;
