// Please implement exercise logic here
// create container (div)

for (let i = 1; i < 7; i++) {
  const container = document.createElement('div');
  document.body.appendChild(container).className = 'container';

  const row = document.createElement('div');
  container.appendChild(row).className = 'row';

  const counter = document.createElement('span');
  counter.innerText = i;
  row.appendChild(counter).className = 'word';
}
