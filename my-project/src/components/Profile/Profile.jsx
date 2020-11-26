import React from 'react';
import classes from './Profile.module.css';
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const ProfileInfo = () => {
    return (
        <div>
            <div>
            </div>
            <div className={classes.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}
const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPostsContainer />
        </div>
    )
}

export default Profile;