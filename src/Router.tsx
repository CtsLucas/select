import { Route, Routes } from 'react-router-dom';

import { PrivateRoute } from '@components';
import {
  Course,
  ForgotPassword,
  Home,
  Journey,
  NotFound,
  SignIn,
  SignUp,
} from '@pages';

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
