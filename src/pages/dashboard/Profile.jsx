import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";

const ProfilePage = () => {
  const { user } = useAuth();
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(user?.displayName || "");

  const handleSave = () => {
    // Handle saving profile changes (call API)
    alert("Profile saved successfully!");
    setEditing(false);
  };

  return (
    <div className="max-w-4xl mx-auto my-12 p-6 bg-base-100 shadow-xl rounded-2xl">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        {/* Profile Picture */}
        <div className="shrink-0">
          <div className="avatar">
            <div className="w-32 h-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img
                src={user?.photoURL || "https://via.placeholder.com/150"}
                alt="Profile"
              />
            </div>
          </div>
        </div>

        {/* Profile Info */}
        <div className="flex-1 w-full">
          <h2 className="text-2xl font-bold mb-2">Profile Information</h2>

          <div className="space-y-4">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Name
              </label>
              {editing ? (
                <input
                  type="text"
                  className="input input-bordered w-full mt-1"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              ) : (
                <p className="mt-1 text-gray-700">{name}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Email
              </label>
              <p className="mt-1 text-gray-700">{user.email}</p>
            </div>

            {/* User Role or other info */}
            {user?.role && (
              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Role
                </label>
                <p className="mt-1 text-gray-700 capitalize">{user.role}</p>
              </div>
            )}
          </div>

          {/* Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            {editing ? (
              <>
                <button
                  className="btn btn-primary w-full sm:w-auto"
                  onClick={handleSave}
                >
                  Save Changes
                </button>
                <button
                  className="btn btn-outline w-full sm:w-auto"
                  onClick={() => setEditing(false)}
                >
                  Cancel
                </button>
              </>
            ) : (
              <button
                className="btn btn-secondary w-full sm:w-auto"
                onClick={() => setEditing(true)}
              >
                Edit Profile
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Optional Extra Info */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="bg-gray-50 p-4 rounded-xl shadow-sm">
          <h3 className="font-semibold text-gray-700 mb-2">Account Created</h3>
          <p className="text-gray-500">
            {user.metadata?.creationTime
              ? new Date(user.metadata?.creationTime).toLocaleDateString()
              : "N/A"}
          </p>
        </div>

        <div className="bg-gray-50 p-4 rounded-xl shadow-sm">
          <h3 className="font-semibold text-gray-700 mb-2">Last Login</h3>
          <p className="text-gray-500">
            {user.metadata?.lastSignInTime
              ? new Date(user.metadata?.lastSignInTime).toLocaleString()
              : "N/A"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
