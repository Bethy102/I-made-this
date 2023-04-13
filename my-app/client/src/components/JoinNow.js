import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../components/Firebase";
import SignUp from "./SignUp";
import LogIn from "./LogIn";


const  JoinNow = () => {

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          const uid = user.uid;
          // ...
          console.log("uid", uid);
        } else {
          // User is signed out
          // ...
          console.log("user is logged out");
        }
      });
      return unsubscribe;
    }, []);
  
    const navigate = useNavigate();
  
    const handleLogout = () => {
      signOut(auth)
        .then(() => {
          // Sign-out successful.
          navigate("/");
          console.log("Signed out successfully");
        })
        .catch((error) => {
          // An error happened.
        });
    };
  
    return (
      <>
        <nav>
          <p>Welcome</p>
        <div>
            <SignUp/>
            {/* <LogIn/> */}
            <button onClick={handleLogout}>Logout</button>
        </div>
        </nav>
      </>
    );
  };
  
  export default JoinNow;
  








// import LogIn from './LogIn';
// import SignUp from './SignUp';
// // import JoinNowPage from './pages/JoinNowPage';
// import PrivateRoute from './PrivateRoute';
// import FirebaseConfig from './FireBase';

// // import 'firebase/auth';





// const JoinNow = () => {
//     return (
//         <div>
//             <FirebaseConfig/>
//             <LogIn/>
//             <SignUp/>
//             <PrivateRoute/>
//         </div>
//     )
// }
// export default JoinNow;

