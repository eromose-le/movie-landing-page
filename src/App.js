import * as React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import LoaderComponent from './components/Loader';
import Home from './pages/Home';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loading &&
      setTimeout(() => {
        setLoading(false);
      }, 3000);
  }, []);

  return (
    <>
      {loading ? (
        <LoaderComponent
          bgColor="#7971e9"
          textColor="#7971e9"
          iconSize={parseInt('50')}
          title="Radiohead"
          type="box-rectangular"
        />
      ) : (
        <div className="App">
          <BrowserRouter>
            <React.Suspense
              fallback={
                <LoaderComponent
                  bgColor="#7971e9"
                  textColor="#7971e9"
                  iconSize={parseInt('50')}
                  title="Radiohead"
                  type="box-rectangular"
                />
              }
            >
              <Routes>
                <Route path="/" element={<Home />} />
              </Routes>
            </React.Suspense>
          </BrowserRouter>
        </div>
      )}
    </>
  );
}

export default App;
