export function addIsCheckedProperty(list) {
  const addedIsCheckedList = list.map(item => {
    if (!Object.prototype.hasOwnProperty.call(item, 'isChecked')) {
      return Object.assign(item, { isChecked: false });
    }

    return item;
  });

  return addedIsCheckedList;
}

export function removeIsCheckedProperty(list) {
  const removedIsCheckedList = list.map(item => {
    if (Object.prototype.hasOwnProperty.call(item, 'isChecked')) {
      const { isChecked, ...newItem } = item;

      return newItem;
    }

    return item;
  });

  return removedIsCheckedList;
}
