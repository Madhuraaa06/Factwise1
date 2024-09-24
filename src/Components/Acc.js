import React, { useState } from "react";
import './acc.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import profileImage from './images.png';
import ConfirmationModal from "./Modal"; // Import the modal component

const ProfileCard = (pp) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState(pp.pp);
  const [isDeleted, setIsDeleted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control the modal

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((Profile) => ({ ...Profile, [name]: value }));
  };

  const handleDelete = () => {
    setIsModalOpen(true); // Open the confirmation modal
  };

  const confirmDelete = () => {
    setIsDeleted(true);
    setIsModalOpen(false); // Close the modal after confirming
  };

  const cancelDelete = () => {
    setIsModalOpen(false); // Close the modal if canceled
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  if (isDeleted) return null;

  return (
    <div className="profile-card">
      <div className="profile-header">
        <div className="leftside">
          <img 
            src={profileImage} 
            alt="profile" 
            className="profile-image" 
          />
          <h3>{profile.name}</h3>
        </div>
        <button className="toggle-button" onClick={toggleCollapse}>
          {isCollapsed ? "▼" : "▲"}
        </button>
      </div>

      {!isCollapsed && isEditing && (
        <div className="profile-details">
          <div className="profile-row">
            <div className="field">
              <strong>Age:</strong>
              <input
                type="text"
                name="age"
                value={profile.age}
                onChange={handleChange}
              />
            </div>
            <div className="field">
              <strong>Gender:</strong>
              <select
                name="gender"
                value={profile.gender}
                onChange={handleChange}
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Rather not say">Rather not say</option>
              </select>
            </div>
            <div className="field">
              <strong>Country:</strong>
              <input
                type="text"
                name="country"
                value={profile.country}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="field">
            <strong>Description:</strong>
            <textarea
              name="description"
              value={profile.description}
              onChange={handleChange}
            />
          </div>
          <button onClick={handleSave}>Save</button>
        </div>
      )}

      {!isCollapsed && !isEditing && (
        <>
          <div className="profile-row">
            <p className="field"><strong>Age:</strong> {profile.age}</p>
            <p className="field"><strong>Gender:</strong> {profile.gender}</p>
            <p className="field"><strong>Country:</strong> {profile.country}</p>
          </div>
          <div className="field">
            <strong>Description:</strong>
            <p>{profile.description}</p>
          </div>
          <div className="profile-actions">
            <button className="b" onClick={handleEdit} title="Edit">
              <FontAwesomeIcon icon={faEdit} />
            </button>
            <button className="b" onClick={handleDelete} title="Delete">
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
        </>
      )}

      {/* Confirmation Modal for Delete */}
      <ConfirmationModal
        isOpen={isModalOpen}
        onClose={cancelDelete}
        onConfirm={confirmDelete}
      />
    </div>
  );
};

export default ProfileCard;
