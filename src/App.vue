<template>
  <div id="app">
    <div v-for="spons in user"> 
      {{ spons.name }} <br />
      <img v-bind:src="spons.imgUrl" /> <br/>
    </div>
  </div>
</template>

<script>
import { ApiWrapper } from "../khe-frontend-lib/lib/src/index" 
import { LiveUpdates } from "../khe-frontend-lib/lib/src/LiveUpdates"
import { API_BASE, CLIENT_ID } from '../khe-frontend-lib/src/config/config'


export default {
  name: 'app',
  data () {
    
    let wrap = new ApiWrapper();

    wrap.userManager.createUser('dumbuser@test.com', '123456789');

    wrap.sponsorSource.getSponsors().
    then((data)=>{
      this.user = data;
      console.log(this.user);
    });
    
    return {
      user: {}
    }
  },
  mounted () {
    
  }
}
</script>

<style>
</style>
