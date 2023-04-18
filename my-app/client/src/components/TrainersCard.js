import React, { useState } from 'react';
import { Card, Button, Modal, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

const TrainersCard = ({ picture, children }) => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [clientInfo, setClientInfo] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleDateClick = (arg) => {
    setSelectedDate(arg.dateStr);
    console.log(arg)
    setShowModal(true);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Handle submitting the form data for the selected date
    // and redirect the client to a confirmation page
    console.log('Client information:', clientInfo);
    alert(`You have successfully booked a session for ${selectedDate}`);
    setSelectedDate(null); // clear the selected date
    setShowCalendar(false); // close the calendar modal
    setShowModal(false);
    setClientInfo({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
  };

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
  };

  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img style={{ width: '200px' }} variant="top" src={picture} />
        <Card.Body>
          <Card.Title>Profile</Card.Title>
          <Card.Text>{children}</Card.Text>
          <Button variant="primary" active onClick={() => setShowCalendar(true)}>
            Train with Me
          </Button>
        </Card.Body>
      </Card>
      {showCalendar && (
        <Modal show={showCalendar} onHide={() => setShowCalendar(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Select a Date</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FullCalendar
              plugins={[dayGridPlugin]}
              initialView="dayGridMonth"
              events={[
                { title: 'Availability', start: '2023-05-01', end: '2023-05-01' },
                { title: 'Availability', start: '2023-05-05', end: '2023-05-05' },
                { title: 'Availability', start: '2023-05-10', end: '2023-05-10' },
                { title: 'Availability', start: '2023-05-15', end: '2023-05-15' },
                { title: 'Availability', start: '2023-05-20', end: '2023-05-20' },
                { title: 'Availability', start: '2023-05-25', end: '2023-05-25' },
              ]}
              eventClick={handleDateClick}
            />
          </Modal.Body>
        </Modal>
      )}
      {showModal && (
        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Enter your information</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleFormSubmit}>
              <Form.Group>
                <Form.Label>Selected Date: </Form.Label>
                <Form.Control type="text" id="date" value={selectedDate} readOnly />
              </Form.Group>
              <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" required />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" required />
          </Form.Group>
          <Form.Group>
            <Form.Label>Phone</Form.Label>
            <Form.Control type="tel" placeholder="Enter your phone number" required />
          </Form.Group>
          <Form.Group>
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Enter your message" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
        </Form>
                  </Modal.Body>
                </Modal>
              )}
            </div>
          );
        };

        export default TrainersCard;








// import React, {useState} from 'react';
// // import styles from './TrainersProfile.module.css';
// import { Card, Button, Modal, Form } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import FullCalendar from '@fullcalendar/react';
// import dayGridPlugin from '@fullcalendar/daygrid';

// const TrainersCard = ({picture, children}) => {

//   const [showCalendar, setShowCalendar] = React.useState(false);
//   const [selectedDate, setSelectedDate] = React.useState(null);
//   const [showModal, setShowModal] = React.useState(false);
  
//   const handleDateClick = (arg) => {
//     setSelectedDate(arg.dateStr);
//     // setShowModal(true);
//     // alert(`You have booked an appointment on ${arg.date}`);
//   };

//   const handleFormSubmit = (event) => {
//     event.preventDefault();
//     // handle submitting the form data for the selected date
//     // and redirect the client to a confirmation page
//     alert(`You have selected the date: ${selectedDate}`);
//     setSelectedDate(""); // clear the selected date
//     setShowCalendar(false); // close the calendar modal
//     // setShowModal(false);
//     // alert(`Your appointment on ${selectedDate} has been booked.`);
//   };

//     return (
//     <div>
//       <Card style={{ width: '18rem' }}>
//         <Card.Img  style={{width:"200px"}} variant="top" src={picture} />
//           <Card.Body>
//             <Card.Title>Profile</Card.Title>
//                 <Card.Text>
//                   {children}
//                 </Card.Text>
//                 <Button variant="primary" active onClick={() => setShowCalendar(true)} >Train with Me</Button>
                
//           </Card.Body>
//       </Card>
//       {showCalendar && (
//         <FullCalendar
//         plugins={[dayGridPlugin]}
//         initialView="dayGridMonth"
//         events={[
//           { title: "Availability", start: "2023-05-01", end: "2023-05-01" },
//           { title: "Availability", start: "2023-05-05", end: "2023-05-05" },
//           { title: "Availability", start: "2023-05-10", end: "2023-05-10" },
//           { title: "Availability", start: "2023-05-15", end: "2023-05-15" },
//           { title: "Availability", start: "2023-05-20", end: "2023-05-20" },
//           { title: "Availability", start: "2023-05-25", end: "2023-05-25" },
//             // add more availability events here
//         ]}
//         dateClick={handleDateClick}
//         />
//       )}
//       {showModal && (
//         <Modal show={showModal} onHide={() => setShowModal(false)}>
//         <Modal.Header closeButton>
//           <Modal.Title>Enter your information</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form onSubmit={handleFormSubmit}>
//             {/* Add form fields here for the client to enter their information */}
//             <form onSubmit={handleFormSubmit}>
//             <label htmlFor="date">Selected Date: </label>
//             <input type="text" id="date" value={selectedDate} readOnly />
//             <br />
//             <button type="submit">Submit</button>
//             <button onClick={() => setShowCalendar(false)}>Cancel</button>
//           </form>
//         </div>
//       )}
//           </Modal.Body>>
//         </Modal>
//       )}
//       </div>
//        );
//       }
//       export default TrainersCard; 







        // <div className="TrainersCardContainer" style = {{witdth:'18em'}}>
        //     <img src= {picture} alt=' a personal '/>
        // <div className = "trainersInfo">
        //     {children}
        // </div>
        // </div>
        // )
    
    
    
    
    
    
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