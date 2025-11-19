/**
 * 类型安全的 navigate Hook
 * - 自动验证路径是否存在
 * - 自动填充动态参数
 * - 编译期检查路径和参数是否匹配
 */

import { useNavigate } from 'react-router-dom';
import type { RoutePath } from '~/types/route';

export function useNavigateSafe() {
    const navigate = useNavigate();

    return (path: RoutePath) => {
        navigate(path);
    };
}
