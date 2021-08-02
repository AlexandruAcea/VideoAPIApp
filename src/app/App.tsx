import React from 'react';
import { Router } from '../router';
import { Status } from './Status';
import { Store } from './Store';

export function App() {
	return (
    <Store>
        <Status/>
        <Router />
    </Store>
	);
}
