import React, {useState} from 'react';
import Trainers from './TrainersProfile';
import TrainersProfile from './TrainersProfile';

const TrainersList = () => {
    const [profiles, setProfiles] = useState([
        {
            name: 'Ella',
            Location: 'Quebec',
            Expertise: '',
            Style: '',
            Loves: '',
            Bio: '',

        },

    ]);
}

return (
    <div>
        {Trainers.map((profile) => (
            <TrainersProfile picture="" >
                <h2>{profile.name}</h2>
                <p> Location: {profile.location}</p>
                <p> Expertise : {profile.expertise}</p>
                <p>{profile.style}</p>
                <p>Loves: {profile.loves}</p>
                <p>Bio: {profile.bio}</p>
                <button>View Profile</button>
            </TrainersProfile>
        ))}
    </div>
);

export default TrainersList;