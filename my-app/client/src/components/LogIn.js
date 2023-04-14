// import React, {useState} from 'react';
// import {  signInWithEmailAndPassword   } from 'firebase/auth';
// import { auth } from './Firebase';
// import { NavLink, useNavigate } from 'react-router-dom'
 
// const Login = () => {
//     const navigate = useNavigate();
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
       
//     const onLogin = (e) => {
//         e.preventDefault();
//         signInWithEmailAndPassword(auth, email, password)
//         .then((userCredential) => {
//             // Signed in
//             const user = userCredential.user;
//             navigate("/home")
//             console.log(user);
//         })
//         .catch((error) => {
//             const errorCode = error.code;
//             const errorMessage = error.message;
//             console.log(errorCode, errorMessage)
//         });
       
//     }
 
//     return(
//         <>
//             <main >        
//                 <section>
//                     <div>                                            
//                         <p> Thank You </p>                       
                                                       
//                         <form>                                              
//                             <div>
//                                 <label htmlFor="email-address">
//                                     Email address
//                                 </label>
//                                 <input
//                                     id="email-address"
//                                     name="email"
//                                     type="email"                                    
//                                     required                                                                                
//                                     placeholder="Email address"
//                                     onChange={(e)=>setEmail(e.target.value)}
//                                 />
//                             </div>

//                             <div>
//                                 <label htmlFor="password">
//                                     Password
//                                 </label>
//                                 <input
//                                     id="password"
//                                     name="password"
//                                     type="password"                                    
//                                     required                                                                                
//                                     placeholder="Password"
//                                     onChange={(e)=>setPassword(e.target.value)}
//                                 />
//                             </div>
                                                
//                             <div>
//                                 <button                                    
//                                     onClick={onLogin}                                        
//                                 >      
//                                     Login                                                                  
//                                 </button>
//                             </div>                               
//                         </form>
                       
//                         <p className="text-sm text-white text-center">
//                             No account yet? {' '}
//                             <NavLink to="/signup">
//                                 Sign up
//                             </NavLink>
//                         </p>
                                                   
//                     </div>
//                 </section>
//             </main>
//         </>
//     )
// }
 
// export default Login







// // import React, { useState } from 'react';
// // import firebase from 'firebase/app';
// // import 'firebase/auth';


// // const LogIn = () => {
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');

// //   const handleLogIn = async (e) => {
// //     e.preventDefault();

// //     try {
// //       await firebase.auth().signInWithEmailAndPassword(email, password);
// //     } catch (error) {
// //       console.error(error);
// //     }
// //   };

// //   return (
// //     <form onSubmit={handleLogIn}>
// //       <label>
// //         Email:
// //         <input
// //           type="email"
// //           value={email}
// //           onChange={(e) => setEmail(e.target.value)}
// //         />
// //       </label>
// //       <label>
// //         Password:
// //         <input
// //           type="password"
// //           value={password}
// //           onChange={(e) => setPassword(e.target.value)}
// //         />
// //       </label>
// //       <button type="submit">Log In</button>
// //     </form>
// //   );
// // };

// // export default LogIn;
