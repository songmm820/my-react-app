import { Suspense, type LazyExoticComponent } from 'react'
import PrivateRoute from './PrivateRoute'
import type { GetProps } from '~/lib/type-utils'
import Container from '~/components/features/Container'

type PrivateRouteProps = GetProps<typeof PrivateRoute>

type LazyRouteProps = {
    lazyChildren: LazyExoticComponent<() => React.ReactNode>
} & Omit<PrivateRouteProps, 'children'>

const LazyRoute = (props: LazyRouteProps) => {
    return (
        <Suspense fallback={<div>loading</div>}>
            <PrivateRoute {...props}>
                <Container>
                    <props.lazyChildren />
                </Container>
            </PrivateRoute>
        </Suspense>
    )
}

export default LazyRoute
