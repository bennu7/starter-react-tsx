import { Helmet } from 'react-helmet-async';

const Welcome = () => {
    return (
        <div className="font-poppins">
            <Helmet>
                <title>Welcome</title>
            </Helmet>
            Welcome
        </div>
    );
};

export default Welcome;
