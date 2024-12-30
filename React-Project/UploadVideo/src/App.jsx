import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import authservice from './appwrite/app';
import './App.css';
import { login, logOut } from './store/authSlice';
import { Footer, Header } from './components';
import { Outlet } from 'react-router-dom';

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const userData = await authservice.getCurrentUser();
        if (userData) {
          // Assuming login expects an object like { userData }
          dispatch(login({ userData }));
        } else {
          dispatch(logOut());
        }
      } catch (error) {
        console.log('Error fetching current user:', error);
        dispatch(logOut()); // Optionally log out the user on error
      } finally {
        setLoading(false);
      }
    };

    fetchCurrentUser();
  }, [dispatch]);

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-500'>
      <div className='w-full block'>
        <Header />
        <main>
          {/* If you want nested routes, uncomment this */}
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null;
}

export default App;
