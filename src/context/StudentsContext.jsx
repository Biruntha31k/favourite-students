import React, { createContext, useState } from 'react';

export const StudentsContext = createContext();

export const StudentsProvider = ({ children }) => {
  const [students, setStudents] = useState(['Ashok', 'Bindhu', 'Dhruv', 'Raghav', 'Santhosh', 'Sakthi', 'Vijay', 'Vaishu']);
  const [favourites, setFavourites] = useState([]);

  const addToFavourites = (student) => {
    setFavourites([...favourites, student]);
    setStudents(students.filter((s) => s !== student));
  };

  const removeFromFavourites = (student) => {
    setStudents([...students, student]);
    setFavourites(favourites.filter((f) => f !== student));
  };

  return (
    <StudentsContext.Provider value={{ students, favourites, addToFavourites, removeFromFavourites }}>
      {children}
    </StudentsContext.Provider>
  );
};
