import { auth } from '$lib/lucia.js';
import type { ServerLoad } from '@sveltejs/kit';
import { handleSession } from 'lucia-sveltekit';

// breaks downstream await parent() types
// export const load = auth.handleServerLoad(handleSession(), async (e) => {
// 	const { num } = e.locals as App.Locals; // doesn't extend App.Locals

// 	return {
// 		num
// 	};
// });

// doing it this way keeps SK types intact, but it still has the setHeaders type error
export const load: ServerLoad = async (e) => {
	const { _lucia } = await auth.handleServerLoad(handleSession())(e);
	const { num } = e.locals;

	return {
		_lucia,
		num
	};
};
