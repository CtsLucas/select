import { Route, Routes } from 'react-router-dom';

import { PrivateRoute } from './components/PrivateRoute';
import { Home } from './pages/Home';
import { Journey } from './pages/Journey';
import { Course } from './pages/Course';
import { SignIn } from './pages/SignIn';
import { SignUp } from './pages/SignUp';
import { ForgotPassword } from './pages/ForgotPassword';
import { NotFound } from './pages/NotFound';

export function Router() {
  return (
    <Routes>
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/" element={<PrivateRoute />}>
        <Route path="/" element={<Home />} />
        <Route path="/journeys/:id" element={<Journey />} />
        <Route path="/courses/:id" element={<Course />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
