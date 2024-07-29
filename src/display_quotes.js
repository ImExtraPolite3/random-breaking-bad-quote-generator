export default function displayQuotes(Quote, Author) {
  const quote = document.getElementById('quote');
  const author = document.getElementById('author');

  quote.textContent = Quote;
  author.textContent = Author;
}
