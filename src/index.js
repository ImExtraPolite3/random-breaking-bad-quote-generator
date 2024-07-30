import './style.css';
import getQuote from './get_quotes';

function reloadPage() {
  const reload_page_button = document.getElementById('reload-page');

  reload_page_button.addEventListener('click', () => {
    location.reload();
  });
}

getQuote();
reloadPage();
