<template>
  <div>
    <TheHeader @sidenavToggle="displaySidenav = !displaySidenav" />
    <TheSidenav :show="displaySidenav" @close="displaySidenav = false" />
    <nuxt />
  </div>
</template>

<script>
import TheHeader from "@/components/Navigation/TheHeader"
import TheSidenav from "@/components/Navigation/TheSidenav"

export default {
  components:{
    TheHeader,
    TheSidenav
  },
  data(){
    return{
      displaySidenav: false
    }
  }
}
</script>
<style>
html ,body{
  font-family: 'vazir', sans-serif;
  margin: 0;
  padding: 0;
}
</style>
