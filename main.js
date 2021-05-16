var restart = document.querySelector('#b');
var table = document.querySelectorAll('td');
function clear() {
    for (var i = 0; i < table.length; i++) {
      table[i].textContent = '';
    }
}
restart.addEventListener('click', clear);
function change() {
  if (this.textContent === '') {
    this.textContent = 'X';
  }else if (this.textContent === 'X') {
    this.textContent = 'O';
  }else {
    this.textContent = '';
  }
}
for (var i = 0; i < table.length; i++) {
  table[i].addEventListener('click', change);
}
