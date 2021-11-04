<template>
  <Cover v-if="cDisplay">
    <div>
      <div class="dialog">
        <div class="dhead">
          <label class="dhead_label"><i></i>设置</label>
        </div>

        <div class="dcontainter">
          <div class="dleft">
            <li class="liActive">启动设置</li>
            <li>关闭设置</li>
            <li>版本信息</li>
          </div>
          <div class="dright">
            <div class="item"><input type="checkbox" />开机自动启动</div>
            <div class="item"><input type="checkbox" />自动更新</div>
          </div>
        </div>

        <div class="dfooter">
          <div class="cancelBtn okBtn" @click="affirm">确认</div>
          <div class="cancelBtn" @click="cancel">取消</div>
        </div>
      </div>
    </div>
  </Cover>
</template>

<script>
export default {
  name: "SettingDialog",
  props: ["cDisplay"],
  components: {
    Cover: () => import("../../Common/Cover.vue"),
  },
  data() {
    return {
      isShow:true,
      liActive: "",
    };
  },
  methods: {
    liClick(value) {
      // start, close, version
      this.liActive = value;
    },
    affirm() {
      console.log("click event is affirm");
    },
    cancel() {
      console.log("click event is cancel");
      this.cDisplay = false;
      this.isShow = false;
    },
  },
  updated() {
    console.log(`[setting] cDisplay is ${this.cDisplay}`);
  },
};
</script>

<style scoped>
li {
  list-style: none;
  width: 100%;
  height: 50px;
  margin-bottom: 20px;
  line-height: 50px;
  text-align: center;
}
li:hover {
  background: #f4f4f4;
}
.liActive {
  background: #e9e9e9;
}
.dialog {
  width: 690px;
  height: 423px;
  background: rgba(#ffffff, #ffffff, #ffffff, 1) !important;
  background: white !important;
  border-radius: 10px;
  opacity: 1 !important;
  position: relative;
  overflow: hidden;
  /* background: url("/assets/bg.jpg"); */
}
.dcontainter {
  padding: 20px 50px;
  position: relative;
  width: auto;
  overflow: hidden;
  height: 90%;
  border-top: 1px solid gray;
  border-bottom: 1px solid gray;
}
.dhead {
  width: 100%;
  height: 76px;
  line-height: 76px;
}
.dhead_label {
  margin-left: 40px;
  font-size: 30px;
}
.dleft {
  float: left;
  width: 200px;
  height: 200px;
  background: red;
}
.dright {
  float: right;
  width: 380px;
  height: 215px;
  background: green;
  overflow-y: auto;
}
.dfooter {
  border-top: 1px solid gray;
  position: absolute;
  bottom: 0;
  width: 100%;
  max-width: 100%;
  padding: 20px 0;
}
.cancelBtn {
  float: right;
  width: 190px;
  height: 50px;
  line-height: 50px;
  border: 1px solid #393b40;
  border-radius: 4px;
  color: #dcbc60;
  text-align: center;
  margin-right: 30px;
}
.cancelBtn:hover {
  background: #fbf8ef;
}
.okBtn {
  background: #393b40;
}
.okBtn:hover {
  background: #4d4f53;
}
.item {
  width: 100%;
  height: 45px;
  line-height: 45px;
  color: black;
  font-size: 18px;
  background: #dcbc60;
}
input[type="checkbox"] {
  border-radius: 1px;
  border-color: gray;
  width: 22px;
  height: 22px;
  display: inline-block;
}
input[type="checkbox"]:checked {
  background: #393b40;
  color: #f3d7a8;
}
</style>