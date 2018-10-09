
<template>
  <div id="app">
    <m-header></m-header>
    <tab></tab>
    <router-view></router-view>
  </div>
</template>

<script>
/* eslint-disable */
import mHeader from 'components/m-header/m-header';
import tab from 'components/tab/tab';
export default {
  name: 'App',
  components:{
    mHeader,
    tab
  }
}
</script>