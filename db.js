const skirts = [
  { id: '1', name: 'pink awesome skirt', prize: '67€' },
  { id: '2', name: 'white wonder skirt', prize: '67€' },
  { id: '3', name: 'red rose skirt', prize: '67€' },
  { id: '4', name: 'black rock skirt', prize: '67€' },
];

const fabrics = [
  { id: '1', name: 'pinkfabric' },
  { id: '2', name: 'whitefabric' },
  { id: '3', name: 'redfabric' },
  { id: '4', name: 'blackfabric' },
];

export function getSkirts() {
  return skirts;
}
export function getFabrics() {
  return fabrics;
}

export function getSkirtById(id) {
  return skirts.find((skirt) => skirt.id === id);
}
