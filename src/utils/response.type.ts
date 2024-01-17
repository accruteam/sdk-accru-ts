type WithoutTypename<T> = {
  [P in keyof T as Exclude<P, '__typename'>]: T[P];
};

export type Res<T> =
  WithoutTypename<T> extends Record<string, infer U> ? U : never;
