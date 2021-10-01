import * as React from "react";
import styled from "@emotion/styled";

import NotificationList from "./components/NotificationList";
import { KontenAksiDummy, ButtonAksiDummy } from "./components/dummy";

const WS_URL = "ws://localhost:3030";

function App() {
  const [username, setUsername] = React.useState("");
  const [isInputUsername, setIsInputUsername] = React.useState(false);
  const [notifications, setNotifications] = React.useState([]);

  const [isConnected, setIsConnected] = React.useState(false);
  const [ws, setWs] = React.useState(null);

  function handleConnectWebsocket() {
    const ws = new WebSocket(WS_URL);
    setWs(ws);
  }

  function sendMessageWebsocket(content) {
    ws.send(JSON.stringify(content));
  }

  React.useEffect(() => {
    if (!ws) return;
    function onOpen() {
      console.log("Terkonek dengan server websocket");
      setIsConnected(true);
    }
    ws.addEventListener("open", onOpen);
    return () => ws.removeEventListener("open", onOpen);
  }, [ws]);

  React.useEffect(() => {
    if (!ws) return;
    function onClose() {
      console.log("Close koneksi WS");
      setIsConnected(false);
    }
    ws.addEventListener("close", onClose);
    return () => ws.removeEventListener("close", onClose);
  }, [ws]);

  React.useEffect(() => {
    setTimeout(() => {
      setNotifications(messages);
    }, 800);
  }, []);

  return (
    <AppContainer>
      <div>
        <header className="hud-username">
          <div className={isConnected ? "hud-connected" : "hud-disconnected"}>
            &bull; {isConnected ? "Connected" : "Not connected."}
          </div>
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
                    handleConnectWebsocket();
                  } else {
                    ws.close();
                  }
                }}
              />
            )}
          </div>
        </header>

        <main>
          <KontenAksiDummy>
            <ButtonAksiDummy
              onClick={() => sendMessageWebsocket("Ini message dari Aksi 1")}
            >
              Aksi
            </ButtonAksiDummy>
            <ButtonAksiDummy onClick={() => alert("2")}>Aksi</ButtonAksiDummy>
          </KontenAksiDummy>
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

  .hud-connected {
    color: green;
  }

  .hud-disconnected {
    color: gray;
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
