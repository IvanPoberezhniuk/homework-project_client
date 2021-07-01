const getChildComponent = (children, key) =>
  children.filter((comp) => {
    return comp.type.name === key;
  });

const findDiffernt = (firstObject, secondObject) =>
  firstObject.filter(
    (firstObjectItem) =>
      !secondObject.some(
        (secondObjectItem) => firstObjectItem.id === secondObjectItem.id
      )
  );

export { findDiffernt, getChildComponent };
