// Please implement exercise logic here
// eslint-disable-next-line no-plusplus

for (let i = 0; i < 6; i++) {
  const container = document.createElement('div');
  document.body.appendChild(container).className = 'container';

  for (let c = 0; c < 2; c++) {
    const row = document.createElement('div');
    container.appendChild(row).className = 'row';

    for (let e = 0; e < 2; e++) {
      const words = [
        ['orange', 'tomato'],
        ['fire engine', 'basketball'],
      ];
      const wordBox = document.createElement('span');
      wordBox.innerText = words[c][e];
      row.appendChild(wordBox).className = 'word';
    }
  }
}
