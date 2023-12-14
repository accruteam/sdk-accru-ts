export function getEdgesAsList(edges) {
  return edges.map(({ cursor, node }) => ({ cursor, ...node }));
}

export default getEdgesAsList;
