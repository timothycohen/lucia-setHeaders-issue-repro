import { auth } from '$lib/lucia';
import { sequence } from '@sveltejs/kit/hooks';
import type { Handle } from '@sveltejs/kit';

const setLocals: Handle = async ({ event, resolve }) => {
	event.locals.num = 1;
	return await resolve(event);
};

// throws type error unless changing setHeaders to
// setHeaders: (headers: Record<string, string>) => void;
export const handle = sequence(auth.handleHooks(), setLocals);
