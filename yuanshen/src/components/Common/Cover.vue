<template>
  <transition name="el-zoom-in-center">
    <div class="transition-box bigContainer cover_center">
      <div class="grayCover"></div>
      <div class="" style="z-index:100">
        <slot class="showContainer">
          <div class="test"></div>
        </slot>
      </div>
    </div>
  </transition>
</template>

<script>
export default {};
</script>

<style scoped>
</style>

<style>
.test {
  width: 300px;
  height: 150px;
  background: white;
  border-radius: 5px;
}
.bigContainer{
  width:100%;
  height:100%;
}
.grayCover {
  z-index: 100;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: black;
  opacity: 0.7;
}
.cover_center {
  /*  display: table-cell;
  vertical-align: middle;
  text-align: center; */
  z-index: 101;
  position: relative;
  display: -webkit-flex;
  display: flex;
  align-items: center;
  justify-content: center;
  -webkit-align-items: center;
  -webkit-justify-content: center;
}
.testt {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
}
</style>