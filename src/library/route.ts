import { IRequest } from "itty-router";

interface Route {
    view: string;
    title: string;
    description: string;
    keywords: string;
}

export const route = (options: Route) => {
    const { view, ...meta } = options;
    return (request: IRequest) => {
        request.renderer.share(meta);
        return request.renderer.render(view);
    };
}