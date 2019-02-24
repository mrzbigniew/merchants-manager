export const buildQueryString = (params: { [key: string]: any }): string => (
  params
    ? `?${Object.keys(params).reduce(
      (agg: URLSearchParams, cur) => {
        agg.set(cur, params[cur]);
        return agg;
      }, new URLSearchParams()
    ).toString()}`
    : ''
);
