const getChildComponent = (children, key) =>
  children.filter((comp) => {
    return comp.type.name === key;
  });

const findDiffernt = (firstObject, secondObject, compareField) =>
  firstObject.filter(
    (firstObjectItem) =>
      !secondObject.some(
        (secondObjectItem) =>
          firstObjectItem[compareField] === secondObjectItem[compareField]
      )
  );

export { findDiffernt, getChildComponent };
