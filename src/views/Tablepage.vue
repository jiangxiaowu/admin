<template>
  <div class="home">
    <TablePage/>
  </div>
</template>

<script>
// @ is an alias to /src
import TablePage from '@/components/TablePage.vue'

export default {
  name: 'Home',
  components: {
    TablePage,
    
  }
}
</script>
