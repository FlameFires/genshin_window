<template>
  <div id="rightBarIndex">
    <div class="bk"></div>

    <div class="blank"></div>

    <RightCircle
      ><a href="https://ys.mihoyo.com/#/" target="_black"
        ><i class="el-icon-house"></i></a
    ></RightCircle>
    <RightCircle><i class="el-icon-delete right_mys"></i></RightCircle>
    <RightCircle><i class="el-icon-user right_wx"></i></RightCircle>
    <RightCircle><i class="el-icon-star-off right_wb"></i></RightCircle>
    <RightCircle
      ><a href="https://ys.mihoyo.com/#/" target="_black"
        ><i class="el-icon-s-help"></i></a
    ></RightCircle>
  </div>
</template>

<script>
export default {
  name: "right_bar_index",
  components: {
    RightCircle: () => import("./RightCircle.vue"),
  },
};
</script>

<style>
#rightBarIndex {
  position: absolute;
  right: 0;
  height: 100%;
  width: 70px;
  text-align: center;
  color: white;
}
a {
  color: white;
  display: block;
}
a:hover {
  color: #ffd284 !important;
}
.bk {
  position: absolute;
  width: 100%;
  height: 100%;
  background: black;
  opacity: 0.5;
  z-index: -1;
}
.blank {
  margin-top: 36px;
}
.right_mys:hover.right_mys::after {
  content: "";
  position: absolute;
  top: 75px;
  opacity: 1;
  right: 70px;
  width: 170px;
  height: 180px;
  background: url("../../../assets/rightbar/mys.png") no-repeat;
  background-size: 100% 100%;
  /* background: #ffd284; */
}
.right_wx:hover.right_wx::after {
  content: "";
  position: absolute;
  top: 135px;
  opacity: 1;
  right: 70px;
  width: 170px;
  height: 180px;
  background: url("../../../assets/rightbar/wx.png") no-repeat;
  background-size: 100% 100%;
  /* background: #ffd284; */
}
.right_wb:hover.right_wb::after {
  content: "";
  position: absolute;
  top: 210px;
  opacity: 1;
  right: 70px;
  width: 170px;
  height: 180px;
  background: url("../../../assets/rightbar/wb.png") no-repeat;
  background-size: 100% 100%;
  /* background: #ffd284; */
}
</style>