<template>
  <div class="home">
    <CardPage/>
  </div>
</template>

<script>
// @ is an alias to /src
import CardPage from '@/components/CardPage.vue'

export default {
  name: 'Home',
  components: {
    CardPage,
    
  }
}
</script>
