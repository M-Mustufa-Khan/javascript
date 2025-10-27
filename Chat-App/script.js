const input = document.querySelector(".userInput");
const sendBtn = document.querySelector(".send-button");
const chatBox = document.querySelector(".chat-box");
const typing = document.querySelector(".typing-indicator");
const API_KEY = "AIzaSyBcDzCnL2JhGZqJp3kA2RAXNIB3PCosQHg";

function addMsg(text, type) {
  const div = document.createElement("div");
  div.className = `message ${type}`;
  div.innerHTML = type === "received" ? marked.parse(text) : text;
  chatBox.appendChild(div);
  chatBox.scrollTop = chatBox.scrollHeight;
}

async function getBotReply(text) {
  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ contents: [{ parts: [{ text }] }] }),
    }
  );
  const data = await res.json();
  return data.candidates?.[0]?.content?.parts?.[0]?.text || "Sorry, I didn't understand.";
}

function saveChat() {
  const msgs = Array.from(chatBox.children).map(m => ({
    html: m.innerHTML,
    type: m.classList.contains("received") ? "received" : "sent",
  }));
  localStorage.setItem("chat", JSON.stringify(msgs));
}

function loadChat() {
  const saved = JSON.parse(localStorage.getItem("chat")) || [];
  saved.forEach(m => addMsg(m.html, m.type));
}

async function sendMsg() {
  const text = input.value.trim();
  if (!text) return;
  addMsg(text, "sent");
  input.value = "";
  typing.style.display = "flex";
  const reply = await getBotReply(text);
  typing.style.display = "none";
  addMsg(reply, "received");
  saveChat();
}

sendBtn.addEventListener("click", sendMsg);
input.addEventListener("keypress", e => e.key === "Enter" && sendMsg());

window.addEventListener("load", () => {
  loadChat();
  if (!localStorage.getItem("chat")) {
    setTimeout(() => addMsg("Hello! How can I help you today?", "received"), 500);
  }
});
