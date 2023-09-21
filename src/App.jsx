import { useState } from "react";
import Login from "./Component/Login";
import {
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  GithubAuthProvider,
  FacebookAuthProvider,
  signInWithPhoneNumber
} from "firebase/auth";
import { auth } from "./Firebase/firebase-config";
import { BsPersonCircle } from "react-icons/bs";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState({});
  //    

 
const LoginUsingGithub = () => {
    console.log("hii Github")
    const provider = new GithubAuthProvider();
    signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result.customData)
      const { displayName, email } = result.user;
      setUserData({ displayName, email });
      setIsLoggedIn(true);
    })
    .catch((error) => {
      console.log({ error });
    });
}

const LoginUsingFacebook = () => {
  console.log("hii Facebook")
  const provider = new FacebookAuthProvider();
  signInWithPopup(auth, provider)
  .then((result) => {
      console.log(result)
  })
  .catch((error) => {
    console.log({ error });
  });
}

  const SignUpUsingGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const { displayName, email } = result.user;
        setUserData({ displayName, email });
        setIsLoggedIn(true);
      })
      .catch((error) => {
        console.log({ error });
      });
  };

  const Logout = () => {
    signOut(auth)
      .then(() => {
        setUserData({});
        setIsLoggedIn(false);
      })
      .catch((error) => {
        console.log({ error });
      });
  };
  return (
    <div className={`${isLoggedIn ? " bg-[#d5fad5]" : "bg-[#d0aaff]"}`}>
      {!isLoggedIn ? (
        <Login Google={SignUpUsingGoogle} Github={LoginUsingGithub} FaceBook = {LoginUsingFacebook}/>
      ) : (
        <div className="flex flex-row justify-center items-center h-screen ">
          <div className="bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 text-white p-4 flex flex-col justify-center items-center rounded-xl w-96 h-3/5">
            <BsPersonCircle className="h-32 w-32" />
            <div className="flex flex-col justify-start items-center">
              <div className="text-xl font-bold leading-tight tracking-tight md:text-2xl uppercase my-2">{userData.displayName}</div>
              <div className="text-lg font-medium my-2">{userData.email}</div>
              <div className="">
                <button className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 my-2" onClick={Logout}>
                  Log out
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
