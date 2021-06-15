const getChildComponent = (children, key) =>
  children.filter((comp) => {
    console.log(comp.type.name);
    return comp.type.name === key;
  });

export { getChildComponent };
