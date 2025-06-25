import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [idInstance, setIdInstance] = useState("");
  const [apiTokenInstance, setApiTokenInstance] = useState("");

  const [chatIdMessage, setChatIdMessage] = useState("");
  const [message, setMessage] = useState("");

  const [chatIdFile, setChatIdFile] = useState("");
  const [fileUrl, setFileUrl] = useState("");

  const [response, setResponse] = useState(null);

  const apiBase = process.env.REACT_APP_API_BASE_URL;

  const handleRequest = async (endpoint, data = {}) => {
    try {
      const res = await axios.post(`${apiBase}/${endpoint}`, {
        idInstance,
        apiTokenInstance,
        ...data,
      });
      setResponse(res.data);
    } catch (err) {
      setResponse(err.response?.data || { error: "Сервер недоступен" });
    }
  };

  return (
      <div className="wrapper">
        <div className="container">
          <div className="left-panel">
            <input
                placeholder="idInstance"
                value={idInstance}
                onChange={(e) => setIdInstance(e.target.value)}
            />
            <input
                placeholder="apiTokenInstance"
                value={apiTokenInstance}
                onChange={(e) => setApiTokenInstance(e.target.value)}
            />

            <button onClick={() => handleRequest("getSettings")}>getSettings</button>
            <button onClick={() => handleRequest("getStateInstance")}>getStateInstance</button>

            <input
                placeholder="chatId для смс"
                value={chatIdMessage}
                onChange={(e) => setChatIdMessage(e.target.value)}
            />
            <textarea
                placeholder="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <button
                onClick={() =>
                    handleRequest("sendMessage", {
                      chatId: chatIdMessage,
                      message,
                    })
                }
            >
              sendMessage
            </button>

            <input
                placeholder="chatId для файла"
                value={chatIdFile}
                onChange={(e) => setChatIdFile(e.target.value)}
            />
            <input
                placeholder="File URL"
                value={fileUrl}
                onChange={(e) => setFileUrl(e.target.value)}
            />
            <button
                onClick={() =>
                    handleRequest("sendFileByUrl", {
                      chatId: chatIdFile,
                      urlFile: fileUrl,
                      fileName: fileUrl.split("/").pop(),
                    })
                }
            >
              sendFileByUrl
            </button>
          </div>

          <div className="response-block">
            <h3>Ответ:</h3>
            <textarea
                readOnly
                value={JSON.stringify(response, null, 2)}
            />
          </div>
        </div>
      </div>
  );
}

export default App;
