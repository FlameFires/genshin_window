/* eslint-disable */
<template>
  <div id="HeadBar">
    <div class="h_left">
      <label>原神</label>
      <label>1.0.1</label>
    </div>

    <div class="h_right">
      <div class="el-icon-setting setting" @click="setting"></div>
      <div class="min" @click="min">-</div>
      <div class="h_close" @click="close">x</div>
    </div>i
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  methods: {
    setting() {
      this.$emit('listenSetting',true);
    },
    min() {
      console.log("设置还没开发");
    },
    close() {
      window.opener = null;
      window.open("", "_self");
      window.close();
    },
  },
};
</script>

<style scoped>
#HeadBar {
  position: absolute;
  top:0;
  width: 100%;
  height: 30px;
  line-height: 30px;
  background: #141414;
  font-size: 13px;
}
.h_left {
  float: left;
  color: rgb(206, 206, 206);
  
}
.h_left label:nth-child(1) {
  margin-left: 10px;
}
.h_left label:nth-child(2) {
  margin-left: 10px;
  color: #454545;
}
.h_right {
  float: right;
  color: white;
  white-space: nowrap;
}
.h_right div {
  display: inline-block;
  font-size: 20px;
  padding:0 10px
}
.setting{
  font-size: 18px !important;

}
.h_right div:hover {
  display: inline;
  background: #4b4b4b;
  opacity: 0.9;
}
.h_close:hover {
  opacity: 1 !important;
  background: #d5512d !important;
}
</style>
