<template>
  <nav class="navbar level is-fixed-top" role="navigation" aria-label="main navigation">
    <div class="level-left">
      <div class="navbar-brand level-item">
        <a class="navbar-item is-size-4" href="/">
          Stackoverflow
        </a>
        <button class="button navbar-burguer is-hidden-desktop">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <base-link href="/">Home</base-link>
      <base-link href="/tags">Tags</base-link>
      <base-link href="/drafts">Drafts</base-link>
      <base-link href="/deleted">Deleted</base-link>
    </div>
  </nav>
</template>

<script>
import BaseLink from './BaseLink'
export default {
  name: 'BaseNavbar',
  data () {
    return {
      msg: ''
    }
  },
  components: {
    BaseLink
  }
}
</script>

<style scoped>
  .level-item {
    padding-left: 15px;
    padding-right: 15px;
  }
</style>