'use client';
import useZoomScreenEffect from './helper/useZoomScreenEffect';

const ZoomWrapper = ({ children }) => {
	useZoomScreenEffect();
	return <>{children}</>;
};

export default ZoomWrapper;
