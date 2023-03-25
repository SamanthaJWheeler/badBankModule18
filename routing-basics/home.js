function Home(){
    const ctx = React.useContext(UserContext);

    return(
        <div>
            <h3>Home Componet</h3>
            {JSON.stringify(ctx.users)};
        </div>
    );
}