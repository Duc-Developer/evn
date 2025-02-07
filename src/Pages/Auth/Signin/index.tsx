import bgSrc from '@assets/images/sigin_background.png';

const Signin = () => {
    const backgroundImageUrl = new URL(bgSrc, import.meta.url).href;

    return (
        <div
            className="bg-cover bg-center h-screen"
            style={{
                backgroundImage: `url(${backgroundImageUrl})`,
            }}
        >
            Signin
        </div>
    );
};

export default Signin;
