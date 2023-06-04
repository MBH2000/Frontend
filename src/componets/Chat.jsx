import React, {useState} from 'react';
import AgoraUIKit from 'agora-react-uikit';

const Chat = () => {
  const [videoCall, setVideoCall] = useState(true);
  const rtcProps = {
    appId: '2e56d2f7b0a0404eb34a73d6836bad29',
    channel: 'test', // your agora channel
    token: null // use null or skip if using app in testing mode
  };
  const callbacks = {
    EndCall: () => setVideoCall(false),
  };
  return videoCall ? (
    <div style={{display: 'flex', width: '100vw', height: '100vh'}}>
      <AgoraUIKit rtcProps={rtcProps} callbacks={callbacks} />
    </div>
  ) : (
    <h3 onClick={() => setVideoCall(true)}>Start Call</h3>
  );
};

export default Chat;