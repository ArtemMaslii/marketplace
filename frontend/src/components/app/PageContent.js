import { Routes, Route } from 'react-router-dom';

import LoginPage from '../pages/loginPages/LoginPage';
import RegisterPage from '../pages/registerPage/RegisterPage';
import useRouteTransition from '../../hooks/useRouteTransition';

const PageContent = () => {
    const { displayLocation, transitionStage, animateDirection, onAnimationEnd } = useRouteTransition();

    return (
        <div
            className={`${transitionStage} ${animateDirection}`}
            onAnimationEnd={onAnimationEnd}
        >
            <Routes location={displayLocation}>
                <Route path="/" element={<RegisterPage />} />
                <Route path="/login" element={<LoginPage />} />
            </Routes>
        </div>
    );
};

export default PageContent;
