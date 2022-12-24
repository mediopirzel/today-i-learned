const CATEGORIES = [
  { name: 'technology', color: '#3b82f6' },
  { name: 'science', color: '#16a34a' },
  { name: 'finance', color: '#ef4444' },
  { name: 'society', color: '#eab308' },
  { name: 'entertainment', color: '#db2777' },
  { name: 'health', color: '#14b8a6' },
  { name: 'history', color: '#f97316' },
  { name: 'news', color: '#8b5cf6' },
];

// const filtCategory = CATEGORIES.find((cat) => cat.name === 'science').color;

// console.log(filtCategory);

const btn = document.querySelector('.btn-open');
const form = document.querySelector('.fact-form');
const facsList = document.querySelector('.facts-list');

facsList.innerHTML = '';

const createFactsList = function (dataArray) {
  const htmlFacts = dataArray
    .map((fact) => {
      return `
    <li class="fact">
      <p>${fact.text}
      <a class="source" href="${fact.source} target="_blank">(Source)</a>
      </p>
      <span class="tag" style="background-color: ${
        CATEGORIES.find((cat) => cat.name === fact.category).color
      }"
      >${fact.category}</span
      >
      <div class="vote-buttons">
      <button>👍 ${fact.votesInteresting}</button>
      <button>🤯 ${fact.votesMindblowing}</button>
      <button>⛔️ ${fact.votesFalse}</button>
      </div>
  </li>`;
    })
    .join('');
  facsList.insertAdjacentHTML('afterbegin', htmlFacts);
};

btn.addEventListener('click', function () {
  form.classList.toggle('hidden');

  btn.textContent = form.classList.contains('hidden')
    ? 'Share a fact'
    : 'Close';
});

const loadFacts = async function () {
  try {
    const res = await fetch(
      'https://upoywzuulzawrlfoezad.supabase.co/rest/v1/facts',
      {
        headers: {
          apikey:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVwb3l3enV1bHphd3JsZm9lemFkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzEzOTEyODgsImV4cCI6MTk4Njk2NzI4OH0.HnHLJFU6xb4PfkivmoDPIsbCd8_jiuSfhHpTqoAzSW8',
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVwb3l3enV1bHphd3JsZm9lemFkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzEzOTEyODgsImV4cCI6MTk4Njk2NzI4OH0.HnHLJFU6xb4PfkivmoDPIsbCd8_jiuSfhHpTqoAzSW8',
        },
      }
    );

    const data = await res.json();
    const filteredData = data.filter((fact) => fact.category === 'society');

    createFactsList(data);
  } catch (err) {
    console.log(err.message);
  }
  //   console.log(data);
};

loadFacts();

// createFactsList([{ text: 'this is my fact', category: 'misco' }]);
