const Header = () => {
    const view = /*html*/`
        <nav class="Header-main">
            <div class="Header-logo"> 
                <h1>
                    <a href="/">Rick and Morty Explorer</a>
                </h1> 
            </div>
            <div class="Header-nav">
                <a href="#/about/">About</a>
            </div>
        </nav>
    `;
    return view;
}

export {Header};