const Error404 = () => {
    const view = /*html*/`
    <div class="flex flex-col items-center gap-y-9">
        <div class="">
            <span class="block  text-black font-black text-[20.4em] ">404</span>
        </div>
        <p class="text-center italic font-normal text-black mt-0 leading-6">The page you are trying to search has been <br> moved to another universe.</p>
        <a href="/"  class="w-44 truncate bg-[#f49b84] border-none py-3 px-6 rounded-full text-white mt-2.5 cursor-pointer font-black">GET ME HOME</a>
    </div>
    `;
    return view;
}


export {Error404};