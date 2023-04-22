const get = (ID, CMT) => {
  const y = ID.length;
  const x = CMT.length;
  if (x === y) {
    return x;
  }
  return 0;
};

export default get;