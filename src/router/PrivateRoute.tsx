import React, { useEffect, useLayoutEffect } from 'react';
import { useNavigateSafe } from '~/hooks/use-navigate';

/**
 * 一个权限控制路由组件
 * 用于根据用户的认证信息来控制是否允许访问某个页面。
 * 它的主要作用是判断用户是否已经登录（即是否有效的认证信息）
 * 如果需要权限认证且用户未登录，则会跳转到登录页面
 */

type PrivateRouteProps = {
  children?: React.ReactNode;
  title?: string;
  isRequiredAuth?: boolean;
};

export function PrivateRoute(props: PrivateRouteProps) {
    const { children, title, isRequiredAuth = true } = props;

    // Hook for navigation
    const navigate = useNavigateSafe();

    useEffect(() => {
        if (!title) return;
        const originalTitle = document.title;
        document.title = title;
        return () => {
            document.title = originalTitle;
        };
    }, [title]);

    useLayoutEffect(() => {
    // 如果需要权限认证，并且本地存储中没有认证信息，则跳转到登录页面
        if (isRequiredAuth) {
            return navigate('*');
        }
    }, [isRequiredAuth, navigate]);

    return children;
}

export default PrivateRoute;
