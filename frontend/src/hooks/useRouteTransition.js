import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const useRouteTransition = () => {
    const location = useLocation();
    const [displayLocation, setDisplayLocation] = useState(location);
    const [transitionStage, setTransitionStage] = useState("fadeIn");
    const [animateDirection, setAnimateDirection] = useState("");

    useEffect(() => {
        if (location !== displayLocation) {
            setAnimateDirection(location.pathname === "/login" ? "toRight" : "toLeft");
            setTransitionStage("fadeOut");
        }
    }, [location, displayLocation]);

    const onAnimationEnd = () => {
        if (transitionStage === "fadeOut") {
            setTransitionStage("fadeIn");
            setDisplayLocation(location);
        }
    };

    return { displayLocation, transitionStage, animateDirection, onAnimationEnd };
};

export default useRouteTransition;
