import React, { useContext } from 'react';
import { StudentsContext } from '../context/StudentsContext';

function FavouriteList() {
  const { favourites, removeFromFavourites } = useContext(StudentsContext);

  return (
    <div className="mt-5 p-5">
      {/* Favourite Students */}
      {favourites.length > 0 ? (
        favourites.map((student, index) => (
          <div
            key={index}
            className="flex justify-between items-center bg-teal-100 shadow-md p-4 mb-3 rounded-lg hover:shadow-lg"
          >
            <span className="font-medium text-teal-700">{student}</span>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-200"
              onClick={() => removeFromFavourites(student)}
            >
              Remove
            </button>
          </div>
        ))
      ) : (
        <p className="text-gray-500 text-center mt-10">No favourite students yet!</p>
      )}
    </div>
  );
}

export default FavouriteList;
