import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import LazyRoute from '~/router/LazyRoute'
import type { TypedRouteObject } from '~/types/route'

const routes: Array<TypedRouteObject> = [
    {
        path: '/',
        element: <LazyRoute title="Home" isRequiredAuth={false} lazyChildren={lazy(() => import('~/pages/Home'))} />
    },
    {
        path: '/about',
        element: <div>About</div>
    },
    {
        path: '/user/:userId',
        element: <div>Contact</div>
    },
    {
        path: '*',
        element: <LazyRoute title="404" isRequiredAuth={false} lazyChildren={lazy(() => import('~/pages/404'))} />
    }
]

export const router = createBrowserRouter(routes)
