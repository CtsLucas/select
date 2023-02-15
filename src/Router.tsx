import { Route, Routes } from 'react-router-dom';

import { DefaultLayout } from './layouts/DefaultLayout';

import { Home } from './pages/Home';
import { Journey } from './pages/Journey';
import { Course } from './pages/Course';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/journeys/:id" element={<Journey />} />
        <Route path="/courses/:id" element={<Course />} />
      </Route>
    </Routes>
  );
}
