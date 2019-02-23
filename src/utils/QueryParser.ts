export const QueryParser = <T extends {}>(query: string): T => {
  return query ?
    query.split('&').map(
      item => item.split('=')
    ).reduce((agg, cur) => ({
      ...agg,
      [cur[0]]: cur[1]
    }), {} as T)
    : {} as T;
};