// Please implement exercise logic here
// eslint-disable-next-line no-plusplus

const words = ['banana', 'pasta', 'alligator', 'purple', 'accurate', 'fickle'];

for (let i = 0; i < 6; i++) {
  const container = document.createElement('div');
  document.body.appendChild(container).className = 'container';

  const row = document.createElement('div');
  container.appendChild(row).className = 'row';

  for (let c = 0; c < 6; c++) {
    const wordBox = document.createElement('span');
    wordBox.innerText = words[c];
    row.appendChild(wordBox).className = 'word';
  }
}
