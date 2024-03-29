import { useState } from "react";
import { useAppwrite } from "../context/AppwriteProvider";
import UserPreview from "./UserPreview";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import { databases } from "../appwrite/appwrite";
const UserList = () => {
  const { usersData } = useAppwrite();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);

  const filteredUsers = usersData.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto mt-28 p-4">
      <h2 className="text-2xl font-semibold mb-4">Customers List</h2>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="p-2 border mb-4 w-full"
      />

      {/* Display User Cards */}
      <div className=" mt-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredUsers.map((user) => (
          <div
            key={user.$id}
            className="bg-white p-4 rounded shadow-md transition duration-300 hover:shadow-lg"
          >
            <div>
              <strong className="text-lg">{user.name}</strong>
            </div>
            <div className="text-gray-600">{user.phoneno}</div>
            <div className="flex justify-between mt-2">
              <Link
                to={`/user/${user.$id}`}
                className="text-blue-500 underline hover:text-blue-700"
              >
                View
              </Link>
              <button
                onClick={() => {
                  confirm("You Want to Delete this User ");

                  const promise = databases.deleteDocument(
                    "65ddd8d961a57942a6c5",
                    "65ddd8e6a4ab67400c6b",
                    user.$id
                  );

                  promise.then(
                    function (response) {
                      alert("  Delete Successfully !", response); // Success
                      window.location.reload();
                    },
                    function (error) {
                      console.log(error); // Failure
                    }
                  );
                }}
                className="text-slate-900 underline hover:text-red-700"
              >
                <FaTrash />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Display User Preview */}
      {selectedUser && <UserPreview user={selectedUser} />}
    </div>
  );
};

export default UserList;
