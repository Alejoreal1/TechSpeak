// Integración con Gemini API
const GEMINI_API_KEY = "AIzaSyDs-mJ6UWyvcac3yuTOt7mYFjodxzTMekw";
const chatBody = document.getElementById("chatBody");
const userInput = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");

function appendMessage(text, sender) {
  const msgDiv = document.createElement("div");
  msgDiv.className =
    "message " + (sender === "user" ? "user-message" : "bot-message");
  if (sender === "bot") {
    // Contenedor para Cybro y el mensaje
    const botContainer = document.createElement("div");
    botContainer.style.display = "flex";
    botContainer.style.alignItems = "center";
    // Imagen de Cybro
    const cybroImg = document.createElement("img");
    cybroImg.src = "../assets/images/Cybro.png";
    cybroImg.style.width = "40px";
    cybroImg.style.marginRight = "10px";
    cybroImg.alt = "Cybro";
    // Mensaje
    msgDiv.textContent = text;
    botContainer.appendChild(cybroImg);
    botContainer.appendChild(msgDiv);
    chatBody.appendChild(botContainer);
  } else {
    msgDiv.textContent = text;
    chatBody.appendChild(msgDiv);
  }
  chatBody.scrollTop = chatBody.scrollHeight;
}

async function getGeminiResponse(userText) {
  // Usando Gemini Pro (v1beta)
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`;
  const body = {
    contents: [
      {
        parts: [{ text: userText }],
      },
    ],
  };
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    if (!res.ok) throw new Error("Error en la API de Gemini");
    const data = await res.json();
    // Gemini responde en data.candidates[0].content.parts[0].text
    return (
      data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "Lo siento, no pude obtener respuesta."
    );
  } catch (e) {
    return "Ocurrió un error al conectar con Gemini.";
  }
}

async function handleSend() {
  const text = userInput.value.trim();
  if (!text) return;
  appendMessage(text, "user");
  userInput.value = "";
  // Agregar mensaje "Escribiendo..." y guardar referencia
  const writingContainer = document.createElement("div");
  writingContainer.style.display = "flex";
  writingContainer.style.alignItems = "center";
  const cybroImg = document.createElement("img");
  cybroImg.src = "../assets/images/Cybro.png";
  cybroImg.style.width = "40px";
  cybroImg.style.marginRight = "10px";
  cybroImg.alt = "Cybro";
  const writingMsg = document.createElement("div");
  writingMsg.className = "message bot-message";
  writingMsg.textContent = "Escribiendo...";
  writingContainer.appendChild(cybroImg);
  writingContainer.appendChild(writingMsg);
  chatBody.appendChild(writingContainer);
  chatBody.scrollTop = chatBody.scrollHeight;

  const botReply = await getGeminiResponse(text);

  // Quitar el mensaje "Escribiendo..." (el último contenedor Cybro)
  if (writingContainer.parentNode) {
    writingContainer.parentNode.removeChild(writingContainer);
  }
  appendMessage(botReply, "bot");
}

sendBtn.addEventListener("click", handleSend);
userInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") handleSend();
});

/*-------------------------------------------------------------------------------*/
window.addEventListener("DOMContentLoaded", () => {
  const apodo = localStorage.getItem("nickName");

  if (apodo) {
    document.getElementById("perfil").textContent = apodo;
  } else {
    document.getElementById("perfil").textContent = "Invitado";
  }
});