import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import StudentList from './components/StudentList';
import FavouriteList from './components/FavouriteList';
import { StudentsProvider } from './context/StudentsContext';

function App() {
  return (
    <StudentsProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          {/* Header */}
          <header className="flex justify-between items-center bg-purple-500 text-white p-4 shadow-md">
            <h1 className="text-2xl font-bold tracking-wide">🎓 Favourite Students App</h1>
            <div className='flex '>
              {/* Navigation Links */}
              <NavLink
                to="/"
                className="bg-white text-purple-500 px-4 py-2 mr-2 rounded shadow hover:bg-purple-100 text-sm sm:text-base sm:px-4"
              >
                List of Students
              </NavLink>
              <NavLink
                to="/favourites"
                className="bg-teal-500 text-white px-4 py-2 rounded shadow hover:bg-teal-600 text-sm sm:text-base sm:px-4"
              >
                Favourite Students
              </NavLink>
            </div>
          </header>

          {/* Routes */}
          <Routes>
            <Route path="/" element={<StudentList />} />
            <Route path="/favourites" element={<FavouriteList />} />
          </Routes>
        </div>
      </Router>
    </StudentsProvider>
  );
}

export default App;
