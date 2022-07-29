import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import { MainLayout } from '../layouts/MainLayout';
import { AuthPage } from '../pages/AuthPage';

export const App: React.FC = () => (
  <Routes>
    <Route path="/" element={<MainLayout />}>
      <Route
        path="feed"
        element={(
          <>
            Здесь будут выкладываться невыдуманные истории,
            о которых невозможно молчать
          </>
        )}
      />
      <Route
        path="products"
        element={(
          <>
            Функционал хранилища продуктов так то уже есть,
            просто мне пока лень эту шляпу верстать
          </>
        )}
      />
      <Route
        path="recipes"
        element={(
          <>
            Ой, а тут вообще верстать - не переверстать, так вообще хз
          </>
        )}
      />
      <Route path="auth" element={<AuthPage />} />
      <Route
        path="favorites"
        element={(
          <>
            Твои, мои друзья пришли танцевать...
          </>
        )}
      />
      <Route path="*" element={<>Нет никого дома, ты хули припёрся!</>} />
    </Route>
  </Routes>
);
