<template>
  <div class="home">
    <LogOut/>
  </div>
</template>

<script>
// @ is an alias to /src
import LogOut from '@/components/LogOut.vue'

export default {
  name: 'Home',
  components: {
    LogOut,
  }
}
</script>
