<script lang="ts">
	import { signOut, getSession } from 'lucia-sveltekit/client';
	const session = getSession();

	const signOutUser = async () => {
		await signOut();
		window.location.href = '/';
	};

	let number = 0;

	const fetchNumber = async () => {
		const response = await fetch('/api/random-number', {
			headers: {
				Authorization: `Bearer ${$session?.access_token}`
			}
		});
		const result = await response.json();
		if (result.error) {
			console.error(result.error);
			return;
		}
		number = result.number;
	};
</script>

<h2>Profile</h2>
<p>This page is protected and can only be accessed by authenticated users.</p>
<div>
	<p>user id: {$session?.user.user_id}</p>
	<p>username: {$session?.user.username}</p>
</div>

<div>
	<form on:submit|preventDefault={fetchNumber} action="/api/random-number" method="get">
		<input type="submit" value="Get random number" class="button" />
	</form>
	<p>result: {number}</p>
</div>

<button on:click={signOutUser}>Sign out</button>
