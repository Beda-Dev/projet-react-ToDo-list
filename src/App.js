import React from 'react'
import Creation from './component/tache.js'
import { BrowserRouter as Router , Routes, Route , Link  } from 'react-router-dom';
import Equipe from './component/equipe.js'



function App() {
  return (
    <Router>
        <div className="text-center bg-gray-100">
          <header className='bg-gray-900 text-white text-xl text-center p-8 font-serif' >
                <div className="title">
                    <h1 className='text-3xl mb-2'>GESTIONNAIRE DE TACHES</h1>
                </div>
                <fieldset className="field">
                    <nav className="nav-bar">
                      
                      <ul className='flex list-none justify-center gap-8'>
                        <li ><Link to='/creationtache' className='text-white no-underline px-4 py-2 rounded transition duration-300 ease-in-out hover:bg-gray-200 hover:text-gray-900'>Taches</Link></li>
                        <li><Link to='/equipe' className='text-white no-underline px-4 py-2 rounded transition duration-300 ease-in-out hover:bg-gray-200 hover:text-gray-900'>equipe</Link></li>
                      </ul>
                      
                      

                    </nav>
                </fieldset>
            </header>
            <Routes>
              <Route path='/creationtache' element={<Creation />} />
              <Route path='/equipe' element={<Equipe />} />
            </Routes>

          
          
        </div>
    </Router>
  );
}

export default App;
