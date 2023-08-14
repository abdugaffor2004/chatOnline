import { useState } from "react";
import AuthPage from "./AuthPage/AuthPage";
import ChatsPage from "./ChatsPage/ChatsPage";
import './App.css'


function App() {
  const [user, setUser] = useState();
 

  if (!user) {
    return <AuthPage onAuth = {(user) => setUser(user)} />;
  } else {
    return <ChatsPage user={user} />;
  }
}


export default App;