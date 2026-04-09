export const Routes = {
  Root : '/',
  Cv: '/cv',
  NotFound: '*404',
} as const;

export type RoutePaths = typeof Routes[keyof typeof Routes];
