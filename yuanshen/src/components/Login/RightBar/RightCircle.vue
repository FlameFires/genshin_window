<template>
  <div class="pointTip">
    <slot>H</slot>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.pointTip {
  margin: 0 auto;
  width: 36px;
  height: 36px;
  line-height: 36px;
  text-align: center;
  background: black;
  color: white;
  opacity: 0.7;
  flex-direction: column;
  border-radius: 50%;
  display: block;
  margin-bottom: 30px;
  border: 2px solid transparent;
}
.pointTip:hover {
  border: 2px solid #ffd284;
  color: #ffd284 !important;
}
</style>