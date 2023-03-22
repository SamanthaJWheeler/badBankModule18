function Spa(){
    const Route = ReactRouterDOM.Route;
    const Link = ReactRouterDOM.Link;
    const HashRouter = ReactRouterDOM.HashRouter;
   
    return (
        <HashRouter>
            <div>
                <h1>Routing - Hello World</h1>
                <Link to="/">Home</Link> --
                <Link to="/about/">About</Link> --
                <Link to="/products">Products</Link>
                <hr/>
                <Route path = "/" exact componet={Home} />
                <Route path = "/about/" exact componet={About} />
                <Route path = "/products/" exact componet={Products} />
            </div>
        </HashRouter>
    );
}

ReactDOM.render(
    <Spa/>,
    document.getElementById('root')
);indexedDB.h