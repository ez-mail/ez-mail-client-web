export function moveCaretToEnd(element) {
  if (element.innerText.length === 0) {
    return element.focus();
  }

  const selection = window.getSelection();

  if (selection !== null) {
    const newRange = document.createRange();
    newRange.selectNodeContents(element);
    newRange.collapse(false);
    selection.removeAllRanges();
    selection.addRange(newRange);
  }
}

export function normalizeHtml(str) {
  return (
    str && str.replace(/&nbsp;|\u202F|\u00A0/g, ' ').replace(/<br \/>/g, '<br>')
  );
}
