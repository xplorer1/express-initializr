import { useParams } from 'react-router-dom';

const Profile = (props) => {
    let { profile_id } = useParams();
    return <h1>Profile with id: {profile_id}</h1>;
};

export default Profile;