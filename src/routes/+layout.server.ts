import { auth } from '$lib/lucia.js';
import type { ServerLoad } from '@sveltejs/kit';
import { handleSession } from 'lucia-sveltekit';
import type { Session } from 'lucia-sveltekit/types';

// breaks downstream await parent() types
// export const load = auth.handleServerLoad(handleSession(), async (e) => {
// 	const { num } = e.locals; // doesn't extend App.Locals

// 	return {
// 		num
// 	};
// });

// doing it this way keeps SK types intact, but it still has the setHeaders and _lucia type errors
export const load: ServerLoad = async (e) => {
	const { _lucia } = (await auth.handleServerLoad(handleSession())(e)) as {
		_lucia: Session;
	};

	const { num } = e.locals;

	return {
		_lucia,
		num
	};
};
