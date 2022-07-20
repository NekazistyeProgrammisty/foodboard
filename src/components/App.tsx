import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import { MainLayout } from '../layouts/MainLayout';

// TODO:
// <Routes>
//   <Route тут Layout (Header + Footer) path='/'>
//     <Route а тут уже вложенности></Route>
//   </Route>
// </Routes>

export const App: React.FC = () => (
  <Routes>
    <Route path="/" element={<MainLayout />}>
      <Route path="auth" element={<>poshel nahui</>} />
      <Route path="*" element={<>Нет никого дома, ты хули припёрся!</>} />
    </Route>
  </Routes>
);
