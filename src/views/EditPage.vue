<template>
    <section class="EditPage">
        <Navbar/>
        <EditForm/>
    </section>
</template>

<script>
import Navbar from '../components/Navbar'
import EditForm from '../components/EditForm'

export default {
  name: 'EditPage',
  components: {
    Navbar,
    EditForm
  }
}
</script>

<style>
</style>
