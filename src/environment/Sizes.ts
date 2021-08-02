import { Dimensions, PixelRatio, Platform } from 'react-native';
import { OS } from '../consts';

const { width, height } = Dimensions.get('window');
const MIN_HEIGHT = 812; //iPhone 12 mini - the smallest with notch

function normalize(size: number) {
	const scale = width / 390;
	const ratio = PixelRatio.get();

	if (height < MIN_HEIGHT && Platform.OS === OS.iOS) {
		return PixelRatio.roundToNearestPixel((size * scale) / (ratio / 1.8));
	} else {
		return PixelRatio.roundToNearestPixel(size * scale);
	}
}

export const Sizes = {
	contentPadding: normalize(20),
	tabbarHeight: normalize(70),
	normalize: (size: number) => {
		const scale = width / 390;
		const ratio = PixelRatio.get();

		if (height < MIN_HEIGHT && Platform.OS === OS.iOS) {
			return PixelRatio.roundToNearestPixel((size * scale) / (ratio / 1.8));
		} else if (Platform.OS === OS.Android) {
			return PixelRatio.roundToNearestPixel((size * scale) / (ratio / 1.7));
		} else {
			return PixelRatio.roundToNearestPixel(size * scale);
		}
	}
};
