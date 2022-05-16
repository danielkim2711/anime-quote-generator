const getQuotes = async () => {
  const quote = document.getElementById('quote');
  const character = document.getElementById('character');

  const response = await fetch('https://animechan.vercel.app/api/random');
  const data = await response.json();

  quote.textContent = data.quote;
  character.textContent = `${data.character} (${data.anime})`;
};

getQuotes();
