<script lang="ts">
import { onMount } from 'svelte'
import type { IpcRendererEvent } from 'electron'
const { ipcRenderer } = require('electron')

export let name: string
let appAnswer = ''

onMount(() => {
  // communication test between the electron renderer and main process
  ipcRenderer.on('asynchronous-reply', (_event: IpcRendererEvent, arg: string) => {
    console.log(arg) // prints "pong"
    appAnswer = arg
  })
  ipcRenderer.send('asynchronous-message', 'ping')
  console.log('ping sent')
})
</script>

<main>
	<h1>Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
	<p>Main Electron app said: {appAnswer}</p>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>