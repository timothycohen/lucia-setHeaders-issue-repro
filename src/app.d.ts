/// <reference types="lucia-sveltekit" />
declare namespace Lucia {
	interface UserData {
		username: string;
	}
}

declare namespace App {
	interface Locals {
		_lucia: import('lucia-sveltekit/types').Session;
		num: number;
	}
}
