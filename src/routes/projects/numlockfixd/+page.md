---
title: Numlockfixd
description: This project can fix Filco Majestouch TenKeyPad 2 cannot work properly on macOS
---

<script>
    import IconButton from '$lib/components/IconButton.svelte';
</script>

# Numlockfixd <IconButton class="inline-block mx-2" icon="mdi:github" href="https://github.com/jw910731/numlockfixd" />

Filco Majestouch TenKeyPad 2 Has its own numlock state, separtated from the state on host. It is implemented by sending the numlock state change signal when the host numlock state differs from its internal numlock state.

Numlockfixd tricks Filco Majestouch TenKeyPad 2 to think the numlock is always lit. To fix the bug that macOS acting wierd after recieving numlock switch signal.

It register the event listener of IOKit HID, and when a matching keypad is inserted, it lit up the numlock state on computer side.

Implemented in swift and uses SwiftPM as build system.
