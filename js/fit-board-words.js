// Fits each word by gradually reducing the tile's font size until the word fits horizontally.
function fitBoardWords() {
  if (!state) return;
  const grid = document.getElementById('grid');
  if (!grid) return;

  requestAnimationFrame(() => {
    for (const cell of grid.querySelectorAll('.word-cell')) {
      const word = cell.querySelector('.word');
      if (!word) continue;

      word.style.fontSize = '';
      word.classList.remove('word-fitted');

      let fontSize = parseFloat(getComputedStyle(word).fontSize);
      const availableWidth = Math.max(20, cell.clientWidth - 24);

      while (fontSize > 12 && word.scrollWidth > availableWidth) {
        fontSize -= 1;
        word.style.fontSize = `${fontSize}px`;
      }

      if (fontSize < 18) word.classList.add('word-fitted');
    }
  });
}

const originalRender = render;
render = function () {
  originalRender();
  fitBoardWords();
};

window.addEventListener('resize', fitBoardWords);
