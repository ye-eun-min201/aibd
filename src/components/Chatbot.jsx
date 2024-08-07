import React from "react";

const Chatbot = () => {
  return (
    <section
      id="chatbot"
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <iframe
          src="https://hf.co/chat/assistant/66ab2212c3fc41155cd764de"
          style={{
            border: "none",
            width: "100%",
            height: "800px",
            marginTop: "0",
          }} // 높이를 고정하고 너비를 100%로 설정
          title="Hugging Face Chatbot"
        ></iframe>
      </div>
    </section>
  );
};

export default Chatbot;
