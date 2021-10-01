import * as React from "react";
import styled from "@emotion/styled";

function NotificationList({ messages }) {
  if (messages.length) {
    const messagesDescending = messages.sort((a, b) =>
      a.timestamp < b.timestamp ? 1 : -1
    );
    return (
      <Container>
        {messagesDescending.map(({ id, message, timestamp }) => (
          <div key={id} className="item">
            <p className="content">{message}</p>
            <span className="time">
              {new Date(timestamp).toLocaleDateString()}
            </span>
          </div>
        ))}
        <div className="item-end">&mdash; &mdash; &mdash;</div>
      </Container>
    );
  }

  return (
    <Container>
      <div className="no-item">Belum ada notifikasi</div>
    </Container>
  );
}

const Container = styled.div`
  label: notification-list;

  .no-item {
    margin: 20px;
    padding: 20px;
    background-color: #00000010;
    color: purple;
    text-align: center;
  }

  .item {
    margin: 20px;
    padding: 20px;
    border-radius: 2px;
    box-shadow: 0 1px 2px 1px rgba(0, 0, 0, 0.15);
    background-color: #ffffff;
    color: purple;

    p,
    span {
      margin: 0;
    }

    &::after {
      display: block;
      content: "";
      clear: both;
    }

    .time {
      float: right;
      font-size: 11px;
      margin-top: 10px;
    }
  }

  .item-end {
    width: 100%;
    text-align: center;
    color: purple;
  }
`;

export default NotificationList;
