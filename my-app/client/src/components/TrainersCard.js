import React, {useState} from 'react';
// import styles from './TrainersProfile.module.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const TrainersCard = ({picture, children}) => {
    return (
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={picture} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                {children}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          );

        // <div className="TrainersCardContainer" style = {{witdth:'18em'}}>
        //     <img src= {picture} alt=' a personal '/>
        // <div className = "trainersInfo">
        //     {children}
        // </div>
        // </div>
        // )
    }
    export default TrainersCard; 
    
    
    
    
    
    
// <div className="container-fluid">
//     <div className= "row justify-content-center">
//     <div className= "card-img-top text-center">
//     <img src= {picture} alt='image' className="photo w-75"/>
//     </div>
//     <div className ="card-body" style = {{"card-titel fw-bold fs-4"}}>
//      <div className= "card-titel fw-bold fs-4">
//         {children}
//         </div>
//     </div>
//     </div>
// </div>

// {/* <div className={styles.TrainersCardContainer}>
//             <img src= {picture} alt='image'/>
//         <div className = {styles.trainersInfo}>
//             {children}
//         </div>
//         </div> */}