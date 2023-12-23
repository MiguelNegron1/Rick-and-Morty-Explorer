const Header = () => {
    const view = /*html*/`
        <nav class="Header-main w-full bg-black text-white flex justify-between p-5 items-baseline px-14" >
            <div class="Header-logo  sm:text-center m-auto"> 
                <h1 class="font-black bg-custom-title-gradient bg-clip-text text-transparent tracking-wider sm:text-center sm:text-xl md:text-5xl">
                    <a href="/">Rick and Morty Explorer</a>
                </h1> 
            </div>
        </nav>
    `;
    return view;
}

export {Header};