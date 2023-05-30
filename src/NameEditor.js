import { useState } from "react";

const NameEditor = () => {
  const [username, setUsername] = useState("Anderson Dias");
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  return (
    <div className="flex items-center">
      <svg
        class="h-6 w-6 text-black"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        onClick={handleEditClick}
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
        />
      </svg>

      {isEditing ? (
        <input
          type="text"
          className="border border-gray-300 p-1 rounded ml-2"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      ) : (
        <span className="ml-2">{username}</span>
      )}
      {isEditing && (
        <button
          className="bg-orange-500 text-white ml-2 px-2 py-1 rounded"
          onClick={handleSaveClick}
        >
          Save
        </button>
      )}
    </div>
  );
};

export default NameEditor;
