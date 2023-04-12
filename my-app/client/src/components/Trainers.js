import React, {useEffect, useState} from 'react';
import TrainersProfile from './TrainersProfile';

const TrainersList = () => {
    const [profiles, setProfiles] = useState([
        // {
        //     name: 'Ella',
        //     Location: 'Quebec',
        //     Expertise: 'bodybuilding',
        //     Style: 'online in-person',
        //     Bio: 'Lazy Fat'

        // },

    ])

    useEffect(() => {
        fetch("/trainers")
            .then((response) => response.json())
            .then((trainersProfile) => (setProfiles(trainersProfile)));
    }, []);
        return (
            <div>
                {profiles.map((profile) => (
                    <TrainersProfile picture={require("../images/cropped-Ella Pic.jpg")} key={profile.id}>
                                    
                        <h2>{profile.name}</h2>
                        <p> Platform: {profile.platform}</p>
                        <p> Expertise : {profile.expertise}</p>
                        <p>Price : {profile.price}</p>
                        <p>Bio: {profile.bio}</p>
                        {/* <button>View Profile</button> */}
                    </TrainersProfile>
                ))}
            </div>
        )


}

    export default TrainersList;