import routes from "./routes";

export const localMiddlewere = (req, res, next) => {
    res.locals.siteName = "Side Project, Cloning Youtube";
    res.locals.routes = routes;
    next();
}