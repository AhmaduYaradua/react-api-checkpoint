import axios from "axios";
import { useState, useEffect } from "react";
import React from "react";
import ReactDOM from "react-dom";

function UserList() {
  const [listOfUsers, setListOfUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setListOfUsers(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
          List of Users
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {listOfUsers.map((user) => (
            <div
              key={user.id}
              className="p-6 bg-white shadow-md rounded-lg hover:shadow-xl transition-shadow"
            >
              <h2 className="text-2xl font-semibold text-indigo-600 mb-2">
                {user.name}
              </h2>
              <p className="text-gray-700">
                <span className="font-semibold">Email:</span> {user.email}
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Phone:</span> {user.phone}
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Address:</span>{" "}
                {`${user.address.street}, ${user.address.city}`}
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Company:</span>{" "}
                {user.company.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default UserList;
