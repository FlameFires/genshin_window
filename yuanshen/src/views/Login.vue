<template>
  <div id="app" ref="app">
    <!-- <Cover></Cover>  -->

    <div v-if="coverDisplay">
    <SettingDialog v-bind:cDisplay="coverDisplay"></SettingDialog>
    </div>
    

    <HeadBar v-on:listenSetting="setting" />
    <div>
      <Carousel class="carousel_pos" />
    </div>
    <RightBar></RightBar>

    <div class="btn" @click="gameStart">开 始 游 戏</div>
  </div>
</template> 

<script>
export default {
  name: "app",
  data() {
    return {
      coverDisplay: true,
    };
  },
  components: {
    HeadBar: () => import("../components/Login/HeadTitle/Index.vue"),
    RightBar: () => import("../components/Login/RightBar/Index.vue"),
    Carousel: () => import("../components/Login/Carousel/index"),
    SettingDialog: () => import("../components/Login/SettingDialog/Index.vue"),
    Cover: () => import("@/components/Common/Cover.vue"),
  },
  methods: {
    gameStart() {
      console.log("开始游戏");
    },
    dragFunc(id, divid) {
      let Drag = document.getElementById(id);
      let moveDiv = document.getElementById(divid);
      Drag.onmousedown = function (event) {
        let ev = event || window.event;
        //event.stopPropagation(); // 不再派发事件
        let disX = ev.clientX - moveDiv.offsetLeft;
        let disY = ev.clientY - moveDiv.offsetTop;
        /* console.log(ev.clientX,ev.clientY,disX,disY,Drag,moveDiv); */
        document.onmousemove = function (event) {
          let ev = event || window.event;
          moveDiv.style.left = ev.clientX - disX + "px";
          moveDiv.style.top = ev.clientY - disY + "px";
          moveDiv.style.cursor = "move";
        };
      };
      moveDiv.onmouseup = function (event) {
        document.onmousemove = null;
        this.style.cursor = "default";
        /* console.log("已移除"); */
      };
    },
    setting: function (isShow) {
      console.log(isShow);
      this.coverDisplay = isShow;
      console.log(`[login] coverDisplay is ${this.coverDisplay}`);
    },
  },
  beforeCreate() {
    // console.log("创建前：");
    // console.log(this.$el);
    // console.log(this.$data);
    // 初始化对象，但是内部成员未初始化
  },
  created() {
    // console.log("创建完成：");
    // console.log(this.$el);
    // console.log(this.$data);
    // console.log(this.dragFunc);
  },
  beforeMount() {
    // console.log("挂载前：");
    // console.log(this.$el);
    // console.log(this.$data);
    // console.log(this.dragFunc);
    //
  },
  mounted() {
    // console.log("挂载完成：");
    // console.log(this.$el);
    // console.log(this.$data);
    // console.log(this.dragFunc);
    //
  },
  beforeUpdate() {
    // console.log("=即将更新渲染=");
    // console.log(this.dragFunc);
    let name = this.$refs.app.innerHTML;
    // console.log("name:" + name);
  },
  updated() {
    //console.log("==更新成功==");
    //console.log(this.dragFunc);
    let name = this.$refs.app.innerHTML;

    this.dragFunc("HeadBar", "app");
    console.log(`coverDispaly is ${this.coverDispaly}`);
    //console.log("name:" + name);
  },
  beforeDestory() {
    // console.log("销毁前：");
  },
  destoryed() {
    // console.log("销毁完成：");
  },
};
</script>

<style>
body,
div,
ul,
li,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  padding: 0;
}
#app {
  position: relative;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: block;
  top: 500px;
  left: 200px;
  width: 1280px;
  height: 730px;
  background: red;
  overflow: hidden;
  box-shadow: 5px 5px 2px gray;
  background: url("../assets/bg.jpg") no-repeat;
  background-size: 100% 100%;
  user-select: none;
  transform: translateX(-50%) translateY(-50%);
  -moz-transform: translateX(-50%) translateY(-50%);
  -webkit-transform: translateX(-50%) translateY(-50%);
  -ms-transform: translateX(-50%) translateY(-50%);
  margin: 0 auto;
}
.rightBar {
  position: absolute;
  right: 0;
  opacity: 0.6;
  width: 200px;
  height: 100%;
  background-color: black;
}
.carousel_pos {
  position: absolute;
  left: 50px;
  top: 250px;
}
.btn {
  position: absolute;
  width: 235px;
  height: 65px;
  line-height: 65px;
  right: 126px;
  bottom: 40px;
  background-color: #ffcc0b;
  border-radius: 3px;
  text-align: center;
  font-size: 23px;
}
.btn:hover {
  background-color: #f7d568;
}
</style>