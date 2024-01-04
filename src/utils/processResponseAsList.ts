type IStandardList = {
  edges: {
    cursor: any;
    node: any;
  }[];
  pageInfo: any;
  totalCount: number;
};

export type ListResponse<T extends IStandardList> = {
  data: Array<
    T['edges'][number]['node'] & { cursor: T['edges'][number]['cursor'] }
  >;
  edges: T['edges'];
  pageInfo: T['pageInfo'];
  totalCount: T['totalCount'];
};

type IStandardChildrenList = {
  [key: string]: any;
  data: IStandardList;
};

export type ChildrenEdgeListResponse<T extends IStandardChildrenList> = T & {
  data: ListResponse<T['data']>;
};

export const processResponseAsList = <T extends IStandardList>(
  response: T,
): ListResponse<T> => {
  return {
    data: response.edges.map(edge => ({
      ...edge.node,
      cursor: edge.cursor,
    })),
    edges: response.edges,
    pageInfo: response.pageInfo,
    totalCount: response.totalCount,
  };
};
