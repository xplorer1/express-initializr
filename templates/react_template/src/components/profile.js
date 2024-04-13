const Profile = (props) => {
    let profile_id = props.match.params.profile_id;
    return <h1>Profile with id: {profile_id}</h1>;
};

export default Profile;