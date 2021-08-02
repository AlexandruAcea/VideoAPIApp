import { useCallback, useEffect, useMemo, useRef } from 'react';
import { useDispatch as useReduxDispatch, useSelector as useReduxSelector } from 'react-redux';

import { ApplicationState } from '../../store';

export function useCallbackOnce(callback: (...args: any[]) => any) {
	// eslint-disable-next-line react-hooks/exhaustive-deps
	return useCallback(callback, []);
}

export function useEffectOnce(effect: React.EffectCallback) {
	// eslint-disable-next-line react-hooks/exhaustive-deps
	useEffect(effect, []);
}

export function useMemoOnce<T>(factory: () => T) {
	// eslint-disable-next-line react-hooks/exhaustive-deps
	return useMemo<T>(factory, []);
}

export function usePrevious<T>(value: T): T | undefined {
	const ref = useRef<T>();
	useEffect(() => void (ref.current = value), [value]);

	return ref.current;
}

export function useSelector<T>(selector: (state: ApplicationState) => T) {
	return useReduxSelector((state: ApplicationState) => selector(state));
}

export function useDispatch() {
	return useReduxDispatch();
}
