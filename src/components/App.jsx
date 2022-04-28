import { useEffect, Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Container from './Container';
import AppBar from './AppBar';
import { authOperations, authSelectors } from '../redux/auth';
const HomeView = lazy(() => import('./views/HomeView'));
const RegisterView = lazy(() => import('./views/RegisterView'));
const LoginView = lazy(() => import('./views/LoginView'));
const ContactsView = lazy(() => import('./views/ContactsView'));

export default function App() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);
  return (
    <Container>
      {isFetchingCurrentUser ? (
        <h1>Показываем React Skeleton</h1>
      ) : (
        <>
          <AppBar />

          <Suspense fallback={'Loading...'}>
            <Routes>
              <Route path="/" element={<HomeView />} />
              <Route path="/register" restricted element={<RegisterView />} />
              <Route
                path="/login"
                redirectTo="/contacts"
                restricted
                element={
                  !isLoggedIn ? <LoginView /> : <Navigate to="/contacts" />
                }
              />
              <Route
                path="/contacts"
                redirectTo="/login"
                element={
                  isLoggedIn ? <ContactsView /> : <Navigate to="/login" />
                }
              />
            </Routes>
          </Suspense>
        </>
      )}
    </Container>
  );
}
