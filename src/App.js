import * as React from "react";
import styled from "@emotion/styled";

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
debugger;

const AppContainer = styled.div`
  label: app-container;
  display: grid;
  grid-template-columns: 1fr 400px;
  min-height: 100vh;

  .notifikasi {
    background-color: hotpink;
  }
`;

function App() {
  return (
    <AppContainer>
      <div>Konten</div>
      <div className="notifikasi">
        <h1>Bilah notifikasi</h1>
        <NotificationList messages={messages} />
      </div>
    </AppContainer>
  );
}

const NotificationListContainer = styled.div`
  label: notification-list;

  .item {
    margin: 20px;
    padding: 20px;
    border-radius: 2px;
    box-shadow: 0 1px 2px 1px rgba(0, 0, 0, 0.15);
    background-color: #ffffff;
    color: purple;
  }
`;

function NotificationList({ messages }) {
  const messagesDescending = messages.sort((a, b) =>
    a.timestamp < b.timestamp ? 1 : -1
  );
  return (
    <NotificationListContainer>
      {messagesDescending.map(({ id, message }) => (
        <div key={id} className="item">
          {message}
        </div>
      ))}
    </NotificationListContainer>
  );
}

export default App;
