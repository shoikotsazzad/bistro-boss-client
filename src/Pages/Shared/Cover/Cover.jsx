

const Cover = ({ img, title }) => {
    return (
        <div
            className="hero h-[600px]"
            style={{
                backgroundImage: `url("${img}")`,
            }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
                    <p className="mb-5">
                        Our menu is carefully crafted to bring you a mix of classic favorites and exciting new flavors. From fresh starters to hearty main courses and delightful desserts.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Cover;