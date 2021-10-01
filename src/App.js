import * as React from "react";
import styled from "@emotion/styled";

import NotificationList from "./components/NotificationList";
import { KontenAksiDummy } from "./components/dummy";

function App() {
  const [isConnected, setIsConnected] = React.useState(false);
  const [username, setUsername] = React.useState("");
  const [isInputUsername, setIsInputUsername] = React.useState(false);
  const [notifications, setNotifications] = React.useState([]);

  React.useEffect(() => {
    setTimeout(() => {
      setNotifications(messages);
    }, 800);
  }, []);

  return (
    <AppContainer>
      <div>
        <header className="hud-username">
          <div>{isConnected ? "Connected" : "Not connected."}</div>
          <div>
            {username && !isInputUsername && (
              <span onClick={() => setIsInputUsername(true)}>
                Username: {username}
              </span>
            )}
            {!username && !isInputUsername && (
              <button onClick={() => setIsInputUsername(true)}>
                Bikin username
              </button>
            )}
            {isInputUsername && (
              <InputUsername
                username={username}
                onChange={(ev) => setUsername(ev.target.value)}
                onSubmit={() => {
                  setIsInputUsername(false);
                  if (username) {
                    setIsConnected(true);
                  } else {
                    setIsConnected(false);
                  }
                }}
              />
            )}
          </div>
        </header>

        <main>
          <KontenAksiDummy />
        </main>
      </div>

      <div className="notifikasi">
        <h1>Bilah notifikasi</h1>
        <NotificationList messages={notifications} />
      </div>
    </AppContainer>
  );
}

function InputUsername({ username, onChange, onSubmit }) {
  const refInput = React.useRef(null);

  React.useEffect(() => {
    refInput.current.focus();
  }, []);

  return (
    <form
      onSubmit={(ev) => {
        ev.preventDefault();
        onSubmit(ev);
      }}
    >
      <label>
        Username: <input ref={refInput} value={username} onChange={onChange} />
      </label>
    </form>
  );
}

const AppContainer = styled.div`
  label: app-container;
  display: grid;
  grid-template-columns: 1fr 400px;
  min-height: 100vh;

  .hud-username {
    margin: 20px 60px;
  }

  .notifikasi {
    background-color: hotpink;
  }
`;

const createDummyMessages = (messageList) => {
  return messageList.map((konten, index) => ({
    id: index + 1,
    message: konten,
    timestamp: new Date().getTime() - 36000 + index * 5,
  }));
};

const messages = createDummyMessages([
  "Anda berhasil gabung",
  "Teman Anda memposting komentar",
  "Teman Anda yang lain memposting sebuah foto",
]);

export default App;
