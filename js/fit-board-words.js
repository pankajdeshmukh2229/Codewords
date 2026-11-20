export function fitBoardWords(grid) {
  for (const cell of grid.querySelectorAll('.word-cell')) {
    const word = cell.querySelector('.word');
    if (!word) continue;

    word.style.removeProperty('font-size');
    let fontSize = Number.parseFloat(getComputedStyle(word).fontSize);
    const availableWidth = word.clientWidth;
    if (!Number.isFinite(fontSize) || availableWidth <= 0) continue;

    while (fontSize > 1 && word.scrollWidth > availableWidth) {
      fontSize = Math.max(1, fontSize * availableWidth / word.scrollWidth * 0.98);
      word.style.fontSize = `${fontSize}px`;
    }
  }
}
