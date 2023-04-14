import React, {useEffect, useState} from 'react';
import TrainersProfile from './TrainersCard';
import { useParams } from 'react-router-dom';

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

    const { trainingType } = useParams()

    const filteredTrainers = trainingType ?  profiles.filter(profile => profile.expertises.find(expertise => expertise.type === trainingType)) : profiles

    useEffect(() => {
        console.log(trainingType)
        fetch("/trainers")
            .then((response) => response.json())
            .then((trainersProfile) => (setProfiles(trainersProfile)));
    }, []);
        return (
            <div>
                {filteredTrainers.map((profile) => (
                    <TrainersProfile picture={require("../images/cropped-Ella Pic.jpg")} key={profile.id}>
                                    
                        <h2>{profile.name}</h2>
                        <p> Platform: {profile.platform}</p>
                        <p> Expertises : {profile.expertises.map(expertise => {
                            return expertise.type + " , " + "" 
                            })}</p>
                        <p>Price : {profile.price}</p>
                        <p>Bio: {profile.bio}</p>
                        {/* <button>View Profile</button> */}
                    </TrainersProfile>
                ))}
            </div>
        )


}

    export default TrainersList;