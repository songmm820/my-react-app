import { Suspense, type LazyExoticComponent } from 'react';
import PrivateRoute from './PrivateRoute';
import type { GetProps } from '~/lib/type-utils';

type PrivateRouteProps = GetProps<typeof PrivateRoute>;

type LazyRouteProps = {
  lazyChildren: LazyExoticComponent<() => React.ReactNode>;
} & Omit<PrivateRouteProps, 'children'>;

const LazyRoute = (props: LazyRouteProps) => {
    return (
        <Suspense fallback={<div>loading</div>}>
            <PrivateRoute {...props}>
                <props.lazyChildren />
            </PrivateRoute>
        </Suspense>
    );
};

export default LazyRoute;
