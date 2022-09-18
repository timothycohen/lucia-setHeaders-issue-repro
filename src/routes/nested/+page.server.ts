import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ parent }) => {
	const { num } = await parent();

	return {
		multiplied: num * 42
	};
};
