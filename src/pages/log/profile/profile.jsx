import { useState } from 'react';
import avatarPlaceholder from '../../../assets/avatar.jpeg';
import './profile.css';

export default function ProfilePage() {
    const [editMode, setEditMode] = useState(false);
    const [userData, setUserData] = useState({
        name: 'Mathias Gogo',
        email: 'eneikareawajimathias@gmail.com',
        phone: '09038413092',
        bio: 'Digital designer and animation enthusiast.',
        avatar: avatarPlaceholder
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setEditMode(false);
        // Add your profile update logic here
        console.log('Profile updated:', userData);
    };

    const handleAvatarChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                setUserData(prev => ({ ...prev, avatar: event.target.result }));
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="profile-container">
            <div className="profile-card">
                <div className="profile-header">
                    <h2>My Profile</h2>
                    {!editMode && (
                        <button
                            className="edit-btn"
                            onClick={() => setEditMode(true)}
                        >
                            Edit Profile
                        </button>
                    )}
                </div>

                <div className="avatar-section">
                    <div className="avatar-wrapper">
                        <img
                            src={userData.avatar}
                            alt="Profile"
                            className="profile-avatar"
                        />
                        {editMode && (
                            <label className="avatar-upload">
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleAvatarChange}
                                />
                                <span>Change</span>
                            </label>
                        )}
                    </div>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Full Name</label>
                        {editMode ? (
                            <input
                                type="text"
                                name="name"
                                value={userData.name}
                                onChange={handleChange}
                            />
                        ) : (
                            <p className="profile-info">{userData.name}</p>
                        )}
                    </div>

                    <div className="form-group">
                        <label>Email</label>
                        {editMode ? (
                            <input
                                type="email"
                                name="email"
                                value={userData.email}
                                onChange={handleChange}
                            />
                        ) : (
                            <p className="profile-info">{userData.email}</p>
                        )}
                    </div>

                    <div className="form-group">
                        <label>Phone</label>
                        {editMode ? (
                            <input
                                type="tel"
                                name="phone"
                                value={userData.phone}
                                onChange={handleChange}
                            />
                        ) : (
                            <p className="profile-info">{userData.phone}</p>
                        )}
                    </div>

                    <div className="form-group">
                        <label>Bio</label>
                        {editMode ? (
                            <textarea
                                name="bio"
                                value={userData.bio}
                                onChange={handleChange}
                                rows="4"
                            />
                        ) : (
                            <p className="profile-info bio">{userData.bio}</p>
                        )}
                    </div>

                    {editMode && (
                        <div className="form-actions">
                            <button
                                type="button"
                                className="cancel-btn"
                                onClick={() => setEditMode(false)}
                            >
                                Cancel
                            </button>
                            <button type="submit" className="save-btn">
                                Save Changes
                            </button>
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
}