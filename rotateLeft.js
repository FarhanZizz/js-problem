const rotateLeft = (array, rotations) => {
  for (let i = 0; i < rotations; i++) {
    let first = array.shift();
    array.push(first);
  }
  return array;
};
