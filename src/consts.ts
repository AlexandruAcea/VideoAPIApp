export const CONTENT_PADDING = 20;

export const DEFAULT_DEBOUNCE_TIME = 500;
export const DEFAULT_ACTIVITY_TIMEOUT = 3000;

export const TIMESTAMP_FORMAT = 'HH:mm';
export const DAY_FORMAT = 'yyyy-LL-dd';
export const COMPLETE_TIMESTAMP_FORMAT = 'LLLL d, yyyy, HH:mm a';

export const API_KEY = 'fb57e7c04f9d54b784918942c2f3d521';

export enum OS {
	Android = 'android',
	iOS = 'ios',
}

export enum KeyboardEvent {
	DidShow = 'keyboardDidShow',
	DidHide = 'keyboardDidHide',
}

export enum KeyboardType {
	Default = 'default',
	NumberPad = 'number-pad',
	DecimalPad = 'decimal-pad',
	Numeric = 'numeric',
	Email = 'email-address',
	Phone = 'phone-pad',
}

export enum ReturnKey {
	Done = 'done',
	Next = 'next',
	Search = 'search',
	Send = 'send',
	Go = 'go',
	Default = 'default',
}

export enum KeyboardKey {
	Backspace = 'Backspace',
}

export enum ResizeMode {
	Contain = 'contain',
	Cover = 'cover',
	Stretch = 'stretch',
	Repeat = 'repeat',
	Center = 'center',
}

export enum SoftInputMode {
	Resize = 'resize',
	Pan = 'pan',
	Nothing = 'nothing',
}
