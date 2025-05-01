import { Dimensions, PixelRatio, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');

// Guideline sizes (iPhone 11 Pro)
const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

// Horizontal scale
export const scale = size => (width / guidelineBaseWidth) * size;

// Vertical scale
export const verticalScale = size => (height / guidelineBaseHeight) * size;

// Moderate scale (adjust factor as needed)
export const moderateScale = (size, factor = 0.5) =>
    size + (scale(size) - size) * factor;

// Moderate vertical scale
export const moderateVerticalScale = (size, factor = 0.5) =>
    size + (verticalScale(size) - size) * factor;

// Pixel ratio for fonts
export const fontScale = size => {
    const scaledSize = scale(size);
    return Platform.select({
        ios: scaledSize,
        android: PixelRatio.roundToNearestPixel(scaledSize)
    });
};

// Percentage of screen width
export const wp = percentage => width * (percentage / 100);

// Percentage of screen height
export const hp = percentage => height * (percentage / 100);

// Check device type
export const isSmallDevice = width < 375;
export const isLargeDevice = width > 414;