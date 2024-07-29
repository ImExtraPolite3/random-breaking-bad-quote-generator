import displayQuotes from './display_quotes';

export default async function getQuote() {
  const getQuote = await fetch('https://api.breakingbadquotes.xyz/v1/quotes', {
    mode: 'cors',
  });
  const quote = await getQuote.json();

  try {
    displayQuotes(quote[0].quote, quote[0].author);
  } catch {
    return 'nothing found. Please try again later.';
  }
}
