declare module '@loadable/component' {
    import { ComponentType, ReactNode } from 'react';

    interface LoadableOptions {
        fallback?: ReactNode;
        ssr?: boolean;
    }

    function loadable<P = unknown>(
        loader: () => Promise<{ default: ComponentType<P> }>,
        options?: LoadableOptions,
    ): ComponentType<P>;

    export default loadable;
}
