import React, {useEffect, useState} from 'react';
import TrainersProfile from './TrainersCard';
import { useParams } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import styles from "./Trainers.module.css";
import TrainersContext from './TrainersContext';


const TrainersList = () => {
    const [profiles, setProfiles] = useState([
    ])

    const { trainingType } = useParams()

    const filteredTrainers = trainingType ?  profiles.filter(profile => profile.expertises.find(expertise => expertise.type === trainingType)) : profiles

    useEffect(() => {
        // console.log(trainingType)
        fetch("/trainers")
            .then((response) => response.json())
            .then((trainersProfile) => (setProfiles(trainersProfile)));
    }, []);
        return (
            
            <div className={styles.container}>
            <div className={styles.row}>

                {filteredTrainers.map((profile) => (
                    <div className="col-md-4 mb-4">
                    <TrainersProfile picture={profile.image_url}  key={profile.id}>
                    <TrainersContext.Provider value={{}}>
                    </TrainersContext.Provider>
                                    
                        <h2>{profile.name}</h2>
                        <p> Platform: {profile.platform}</p>
                        <p> Expertises : {profile.expertises.map(expertise => {
                            return expertise.type + " , " + "" 
                            })}</p>
                        <p>Price : {profile.price}</p>
                        <p>Bio: {profile.bio} </p>
                        {/* <button>View Profile</button> */}
                    </TrainersProfile>
                    </div>
                ))}
            </div>
        </div>
        )


}

    export default TrainersList;