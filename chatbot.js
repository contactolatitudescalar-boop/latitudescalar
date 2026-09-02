const CHATBOT_ENDPOINT =
  "https://oasis-chat.contacto-latitudescalar.workers.dev";

const WHATSAPP_URL =
  "https://wa.me/5493548567106?text=Hola%20tengo%20una%20consulta%20sobre%20Oasis%20Mental.";

function crearChatbot() {
  const chatbotAntiguo = document.getElementById("chatWidget");
  const botonesAntiguos = document.querySelectorAll(
  ".floating-container, .floating-desktop-cta"
);

if (chatbotAntiguo) {
  chatbotAntiguo.remove();
}

botonesAntiguos.forEach((elemento) => {
  elemento.remove();
});

  
  document.body.insertAdjacentHTML(
    "beforeend",
    `
    <a
      class="floating-desktop-cta"
      href="./index.html#registro"
    >
      ⚡ Mis 7 días gratis
    </a>

    <div class="floating-container">
      <a
        class="floating-mobile-cta"
        href="./index.html#registro"
      >
        ⚡ Mis 7 días gratis
      </a>

      <div class="floating-socials">
        <a
          href="${WHATSAPP_URL}"
          target="_blank"
          rel="noopener noreferrer"
          class="float-btn btn-whatsapp"
          aria-label="Escribir por WhatsApp"
        >
          <svg viewBox="0 0 32 32" aria-hidden="true">
            <path d="M16 2a13.9 13.9 0 0 0-12 21L2 30l7.2-1.9A13.9 13.9 0 1 0 16 2zm0 25.5a11.6 11.6 0 0 1-5.9-1.6l-.4-.3-4.4 1.1 1.2-4.3-.3-.4a11.6 11.6 0 1 1 9.8 5.5zm6.4-8.7c-.4-.2-2.1-1-2.4-1.2s-.6-.2-.8.2-.9 1.2-1.1 1.4-.4.2-.7 0a9.2 9.2 0 0 1-2.7-1.7 10.2 10.2 0 0 1-1.9-2.3c-.2-.4 0-.6.2-.8l.5-.6.4-.5c.1-.2.1-.4 0-.5s-.8-2-1.1-2.7c-.3-.7-.6-.6-.8-.6h-.7a1.4 1.4 0 0 0-1 .5 4.3 4.3 0 0 0-1.3 3.2 7.5 7.5 0 0 0 1.6 4 17.2 17.2 0 0 0 6.6 5.8c2.4 1 2.9.8 3.4.8a3 3 0 0 0 2-1.4 2.5 2.5 0 0 0 .2-1.4c-.1-.1-.3-.2-.7-.4z"/>
          </svg>
        </a>

        <a
          href="https://instagram.com/latitudescalar"
          target="_blank"
          rel="noopener noreferrer"
          class="float-btn btn-instagram"
          aria-label="Seguir en Instagram"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.441 1.441 1.441c.795 0 1.439-.645 1.439-1.441s-.644-1.44-1.439-1.44z"/>
          </svg>
        </a>

        <button
          class="float-btn btn-gemini"
          type="button"
          id="chatOpenButton"
          aria-label="Abrir asistente Oasis"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M19 9l1.25-2.75L23 5l-2.75-1.25L19 1l-1.25 2.75L15 5l2.75 1.25L19 9zm-7.5.5L9 4 6.5 9.5 1 12l5.5 2.5L9 20l2.5-5.5L17 12l-5.5-2.5zM19 15l-1.25 2.75L15 19l2.75 1.25L19 23l1.25-2.75L23 19l-2.75-1.25L19 15z"/>
          </svg>
        </button>
      </div>
    </div>

    <div
      class="chat-widget"
      id="chatWidget"
      aria-label="Asistente Oasis"
    >
      <div class="chat-header">
        <div>
          <h4>✨ Asistente Oasis</h4>
          <span>Preguntas sobre energía escalar</span>
        </div>

        <button
          class="chat-close"
          type="button"
          id="chatCloseButton"
          aria-label="Cerrar"
        >
          ×
        </button>
      </div>

      <div class="chat-messages" id="chatMessages">
        <div class="chat-msg msg-bot">
          Hola, soy el asistente de Oasis Mental. ¿En qué puedo ayudarte?
        </div>
      </div>

      <div class="chat-input-area">
        <input
          id="chatInput"
          type="text"
          placeholder="Escribí tu consulta aquí..."
          autocomplete="off"
        >
        <button
          type="button"
          id="chatSendButton"
        >
          Enviar
        </button>
      </div>
    </div>
    `
  );

  document
    .getElementById("chatOpenButton")
    .addEventListener("click", toggleChat);

  document
    .getElementById("chatCloseButton")
    .addEventListener("click", toggleChat);

  document
    .getElementById("chatSendButton")
    .addEventListener("click", sendMessage);

  document
    .getElementById("chatInput")
    .addEventListener("keydown", handleKey);
}

function toggleChat() {
  const chat = document.getElementById("chatWidget");

  if (!chat) return;

  chat.style.display =
    chat.style.display === "flex"
      ? "none"
      : "flex";

  if (chat.style.display === "flex") {
    document.getElementById("chatInput").focus();
  }
}

function handleKey(event) {
  if (event.key === "Enter") {
    sendMessage();
  }
}

function convertirLinksEnClickeables(elemento, texto) {
  const patronUrl = /(https?:\/\/[^\s]+)/g;

  elemento.replaceChildren();

  String(texto).split(patronUrl).forEach((parte) => {
    if (
      parte.startsWith("https://") ||
      parte.startsWith("http://")
    ) {
      const urlLimpia = parte.replace(/[.,;:!?]+$/, "");

      const link = document.createElement("a");

      link.href = urlLimpia;
      link.target = "_blank";
      link.rel = "noopener noreferrer";

      link.textContent = urlLimpia.includes("#registro")
        ? "Abrir formulario de inscripción"
        : "Abrir WhatsApp de Laura";

      elemento.appendChild(link);

      const signosFinales = parte.slice(urlLimpia.length);

      if (signosFinales) {
        elemento.appendChild(
          document.createTextNode(signosFinales)
        );
      }
    } else {
      elemento.appendChild(
        document.createTextNode(parte)
      );
    }
  });
}

async function sendMessage() {
  const input = document.getElementById("chatInput");
  const sendButton = document.getElementById("chatSendButton");
  const list = document.getElementById("chatMessages");

  const message = input.value.trim();

  if (!message || sendButton.disabled) return;

  const user = document.createElement("div");
  user.className = "chat-msg msg-user";
  user.textContent = message;
  list.appendChild(user);

  input.value = "";
  sendButton.disabled = true;

  const bot = document.createElement("div");
  bot.className = "chat-msg msg-bot";
  bot.textContent = "Escribiendo...";
  list.appendChild(bot);

  list.scrollTop = list.scrollHeight;

  const controller = new AbortController();
  const timeout = setTimeout(() => {
    controller.abort();
  }, 18000);

  try {
    const response = await fetch(
      CHATBOT_ENDPOINT,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ message }),
        signal: controller.signal
      }
    );

    const data = await response.json();

    convertirLinksEnClickeables(
      bot,
      data.answer ||
        "No pude procesar la respuesta. Podés hablar con Laura por WhatsApp: https://wa.me/5493548567106"
    );
  } catch {
    convertirLinksEnClickeables(
      bot,
      "El asistente está tardando demasiado en responder. Podés hablar con Laura por WhatsApp: https://wa.me/5493548567106"
    );
  } finally {
    clearTimeout(timeout);
    sendButton.disabled = false;
    list.scrollTop = list.scrollHeight;
  }
}

crearChatbot();
