import { useEffect, useState } from 'react';
import { ActivityResult, Nullable } from '../store';
import { ActivityError, selectActivity, selectErrorDetails } from '../store/ui/activities';
import { useSelector } from '../store/utils';

interface ActivityConfigParams {
	payload?: any;
	reset?: boolean;
}

export function useActivity(type: string, params?: ActivityConfigParams): ActivityResult {
	const [error, setError] = useState<Nullable<ActivityError>>(null);
	const loading = useSelector((state) =>
		selectActivity(state.ui.activities, type, params?.payload)
	);
	const details = useSelector((state) => selectErrorDetails(state.ui.activities, type));

	useEffect(() => {
		if (details && !error) {
			setError(details);
		}

		if (!details && error && params?.reset) {
			setError(null);
		}
	}, [details]);

	function reset() {
		setError(null);
	}

	return [{ loading, error }, reset];
}
