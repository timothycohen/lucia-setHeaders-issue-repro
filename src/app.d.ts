/// <reference types="lucia-sveltekit" />
declare namespace Lucia {
	interface UserData {
		username: string;
	}
}

declare namespace App {
	interface Locals {
		// adding this fixes type problems with handleServerLoad and handleHooks, but it's a lie
		// bc it's not available on locals throughout the app
		// uncomment this and there's still a problem with setHeaders unless it matches sk
		// setHeaders: (headers: Record<string, string>) => void;
		// _lucia: import('lucia-sveltekit/types').Session;
		num: number;
	}
}
