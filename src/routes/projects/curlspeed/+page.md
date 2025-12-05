---
title: Curlspeed
description: A speedtest tool by trying to download file
---

<script>
    import IconButton from '$lib/components/IconButton.svelte';
</script>

# Curlspeed <IconButton class="inline-block mx-2" icon="mdi:github" href="https://github.com/jw910731/curlspeed" />

Since my ISP is providing a quite unstable network speed during night. I was annoyed by this situation and need a solution to constantly monitor the network speed 24/7. This way I can collect evidences that they are really providing bad network speed.

Since this program need to run on an rather minimal environment (OpenWRT), I need it to be fast, dependency free, and statically linked. Thus, the Rust language is used to achieve this.



