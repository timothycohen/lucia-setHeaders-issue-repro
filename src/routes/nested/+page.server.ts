import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params, parent, locals }) => {
	const { num } = await parent();

	return {
		multiplied: num * 42
	};
};
