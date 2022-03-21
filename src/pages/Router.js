import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Address from './Address';
import Completion from './Completion';
import Confirm from './Confirm';
import Main from './Main';
import Schedule from './Schedule';
import Type from './Type';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/type" element={<Type />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/address" element={<Address />} />
        <Route path="/confirm" element={<Confirm />} />
        <Route path="/completion" element={<Completion />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
