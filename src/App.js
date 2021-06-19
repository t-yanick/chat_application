import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';

import './App.css';

const App = () => {
  return (
    <ChatEngine
      height="100vh"
      projectID="7e4c5ee6-775d-4ac1-81a8-135f6d741f3d"
      userName="t-yanick"
      userSecret="12345678"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
}

export default App;