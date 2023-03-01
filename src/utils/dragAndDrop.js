export function setImageUrl(file, setState) {
  const reader = new FileReader();

  reader.readAsDataURL(file);
  reader.onload = e => {
    setState(e.target.result);
  };
}
