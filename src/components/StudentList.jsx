import React, { useContext } from 'react';
import { StudentsContext } from '../context/StudentsContext';

function StudentList() {
  const { students, addToFavourites } = useContext(StudentsContext);

  return (
    <div className="mt-5 p-5">
      {/* Student List */}
      {students.length > 0 ? (
        students.map((student, index) => (
          <div
            key={index}
            className="flex justify-between items-center bg-white shadow-md p-4 mb-3 rounded-lg hover:shadow-lg"
          >
            <span className="font-medium text-purple-700">{student}</span>
            <button
              className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 transition duration-200"
              onClick={() => addToFavourites(student)}
            >
              Add to Favourite
            </button>
          </div>
        ))
      ) : (
        <p className="text-gray-500 text-center mt-10">No students available!</p>
      )}
    </div>
  );
}

export default StudentList;
