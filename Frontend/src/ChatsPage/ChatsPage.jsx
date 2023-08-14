import { PrettyChatWindow } from "react-chat-engine-pretty";


const ChatsPage = (props) => {
  return (
    <div style={{ height: "100vh" }}>

      <PrettyChatWindow
        projectId={"7c386c88-d7cc-47c4-b6d0-bd8b4e9991f0"}
        username={props.user.username} // adam
        secret= {props.user.secret} // pass1234
        style={{ height: "100%" }}
      />
    </div>
  );
};


export default ChatsPage;