import 'animate.css';
import '../../css/globals.scss';

const useZoomScreenEffect = () => {
	useEffect(() => {
		const adjustZoom = () => {
			const screenWidthInInches =
				window.screen.width / window.devicePixelRatio / 96;
			if (screenWidthInInches >= 27) {
				document.body.style.zoom = '200%';
			} else {
				document.body.style.zoom = '100%';
			}
		};

		adjustZoom();
		window.addEventListener('resize', adjustZoom);

		return () => {
			window.removeEventListener('resize', adjustZoom);
		};
	}, []);
};

export default useZoomScreenEffect;
