import produce from 'immer';

export function setImageUrl(file, emailContentsData, setState, index) {
  const reader = new FileReader();

  if (!file) {
    return;
  }

  reader.readAsDataURL(file);
  reader.onload = e => {
    setState(
      produce(emailContentsData, draft => {
        const imageContent = draft.emailContents[index];

        imageContent.imageSrc = e.target.result;
      }),
    );
  };
}

export function addProperties(list) {
  const addedList = list.map(item => {
    if (
      !Object.prototype.hasOwnProperty.call(item, 'isActive') ||
      !Object.prototype.hasOwnProperty.call(item, 'isDraggable')
    ) {
      return Object.assign(item, { isActive: false }, { isDraggable: false });
    }

    return item;
  });

  return addedList;
}

export function removeProperties(list) {
  const removedList = list.map(item => {
    if (
      Object.prototype.hasOwnProperty.call(item, 'isActive') &&
      Object.prototype.hasOwnProperty.call(item, 'isDraggable')
    ) {
      const { isActive, isDraggable, ...newItem } = item;

      return newItem;
    }

    return item;
  });

  return removedList;
}
