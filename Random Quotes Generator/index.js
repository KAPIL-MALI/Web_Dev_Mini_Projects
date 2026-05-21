const Quotes = [
"The only way to do great work is to love what you do. — Steve Jobs",
"In the middle of difficulty lies opportunity. — Albert Einstein",
"Success is not final, failure is not fatal: it is the courage to continue that counts. — Winston Churchill",
"Be yourself; everyone else is already taken. — Oscar Wilde",
"The future depends on what you do today. — Mahatma Gandhi",
"Do what you can, with what you have, where you are. — Theodore Roosevelt",
"Life is what happens when you're busy making other plans. — John Lennon",
"It always seems impossible until it’s done. — Nelson Mandela",
"Knowledge is power. — Francis Bacon",
"Dream big and dare to fail. — Norman Vaughan"
];

function generator(){
    const getid = document.getElementById("quote");
    const index = Math.floor(Math.random()*Quotes.length);
    getid.textContent = Quotes[index];
}

setInterval(generator,2000);

