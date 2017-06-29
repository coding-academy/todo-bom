<template>
  <div class="contacts">
    <h1>Contacts</h1>
    {{contacts}}
    <h6>
      <router-link to="/todos">Todos</router-link>
    </h6>

  </div>
</template>

<script>
import { CONTACT_LOAD } from '../store/contacts.store'

export default {
  name: 'contacts',
  data() {
    return {
    }
  },
  created() {
    this.$store.dispatch({ type: CONTACT_LOAD });
  },
  computed: {
    contacts() {
      console.log('this.$store', this.$store);
      return this.$store.getters.filteredContacts
    }
  },
}
</script>

<style scoped>

</style>
