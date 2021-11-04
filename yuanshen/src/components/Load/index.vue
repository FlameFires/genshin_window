<template>
  <div>
    <Cover>
      <div class="showDiv">
        <div class="optionLeft">
      </div>
    </Cover>
  </div>
</template>

<script>
export default { 
  components:{
    Cover: ()=>import('../Common/Cover.vue')
  }
}
</script>

<style scoped>
.showDiv {
  width: 300px;
  height: 150px;
  background: white;
  border-radius: 5px;
}
.optionLeft{
  width:30%;
  height: 100%;

}
</style>