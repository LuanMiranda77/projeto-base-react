import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes as Rotas, Route } from 'react-router-dom';
//nossos imports
import { Notfound } from './module/pages/Notfound';
import Login from './module/pages/Login';
import PrivateRoute from './privateRoutes';
import { ModalExample } from './components/modal_example';




const Routes: React.FC = () => {
  return (
    <Router>
      <Suspense fallback={<div className='p-flex p-text-center p-mt-5 p-t-5'></div>}>
        <Rotas>
          <Route path="/" element={<Login/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/home" element={<PrivateRoute component={Login}/>} />
          <Route path='*' element={<Notfound/>} />
          <Route path='/develop-tools' element={<ModalExample/>} />
        </Rotas>
      </Suspense>
    </Router>
   
  );
}
export default Routes;

