const Header = ({ handleStep }) => {
    return (
        <div className="absolute top-0 left-0 z-[100] flex w-screen flex-row items-center justify-between px-20 pt-4">
            <span className="text-2xl font-extrabold uppercase tracking-widest text-fuchsia-500">Portfolio</span>
            <div className="flex flex-row gap-4 uppercase">
                <div onClick={() => handleStep('about')} className="cursor-pointer font-bold leading-tight">
                    <span className="link link-underline link-underline-black text-white">About</span>
                </div>
                <div onClick={() => handleStep('projects')} className="cursor-pointer font-bold leading-tight">
                    <span className="link link-underline link-underline-black text-white">Projects</span>
                </div>
            </div>
        </div>
    );
};

export default Header;
