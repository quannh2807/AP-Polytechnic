import { scaleFont } from './mixins';

// FONT FAMILY
export const FONT_FAMILY_REGULAR = 'OpenSans-Regular';
export const FONT_FAMILY_BOLD = 'OpenSans-Bold';

// FONT WEIGHT
export const FONT_WEIGHT_REGULAR = '400';
export const FONT_WEIGHT_BOLD = '700';

// FONT SIZE
export const FONT_SIZE_16 = scaleFont(16);
export const FONT_SIZE_14 = scaleFont(14);
export const FONT_SIZE_12 = scaleFont(12);
export const FONT_SIZE_13 = scaleFont(13);

// LINE HEIGHT
export const LINE_HEIGHT_24 = scaleFont(24);
export const LINE_HEIGHT_20 = scaleFont(20);
export const LINE_HEIGHT_16 = scaleFont(16);
export const LINE_HEIGHT_14 = scaleFont(14);

// FONT STYLE
export const FONT_REGULAR = {
    fontFamily: FONT_FAMILY_REGULAR,
    fontWeight: FONT_WEIGHT_REGULAR,
};

export const FONT_BOLD = {
    fontFamily: FONT_FAMILY_BOLD,
    fontWeight: FONT_WEIGHT_BOLD,
};

// Heading
export const HEADING_1 = {
    fontWeight: FONT_WEIGHT_BOLD,
    fontSize: 36,
};
export const HEADING_2 = {
    fontWeight: FONT_WEIGHT_BOLD,
    fontSize: 30,
};
export const HEADING_3 = {
    fontWeight: FONT_WEIGHT_BOLD,
    fontSize: 24,
};
export const HEADING_4 = {
    fontWeight: FONT_WEIGHT_BOLD,
    fontSize: 20,
};
export const HEADING_5 = {
    fontWeight: FONT_WEIGHT_BOLD,
    fontSize: 18,
};
export const HEADING_6 = {
    fontWeight: FONT_WEIGHT_BOLD,
    fontSize: 16,
};
