// 路由路径类型（防止拼写错误）
export type RoutePath = '/' | '*' | '/about' | `/user/${string}`;

/**
 * 增强 RouteObject，强制 path 必须是 RoutePath
 */
export type TypedRouteObject = Omit<RouteObject, 'path' | 'children'> & {
  path: RoutePath;
  children?: Array<TypedRouteObject>;
};
