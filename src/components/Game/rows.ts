function createData(
  userName: string,
) {
  return { userName };
}

export const rows = [
  createData('Cat'),
  createData('Dog'),
  createData('Mouse'),
  createData('Сrocodile'),
  createData('Lizard'),
];
