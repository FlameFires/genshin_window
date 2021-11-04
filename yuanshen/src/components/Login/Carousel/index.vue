<template>
  <div class="carousel">
    <div class="cpics">
      <div class="car_left" style="left: 0" @click="btnClick('l')"><</div>
      <div class="car_right" style="right: 0" @click="btnClick('r')">></div>
      <div class="pointDiv">
        <div class="point" @click="pointClick(index)" :class="point_show(index)" :data="index" v-for="(item,index) in gonggao.crousel" ></div>
      </div>
      <!--轮播图-->
      <div class="showImgs">
        <div class="imgsSlide">
          <img
            :src="item"
            :title="key"
            :key="index"
            v-for="(item, key, index) in gonggao.crousel"
          />
        </div>
      </div>
    </div>

    <div class="gonggao">
      <div class="gtitle">
        <div style="padding: 0 4px">
          <li
            v-for="(item, key, index) in gonggao.data"
            :key="index"
            @click="glist_show(key)"
          >
            {{ key }}
          </li>
        </div>
      </div>
      <div
        class="glist"
        v-for="(item, key, index) in gonggao.data"
        :key="index"
        v-show="key == gonggao.i_active"
      >
        <div style="padding: 10px 14px">
          <li v-for="(ite, i) in item" :key="ite + i" v-html="ite[i]"></li>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gonggao: {
        i_active: "公告",
        data: {
          公告: [
            {
              0: "「映天之章」任务开启说明<label style='float: right;color: #aeacab !important;'>10/24</label>",
            },
            {
              1: "「百货奇货」活动说明<label style='float: right;color: #aeacab !important;'>10/24</label>",
            },
            {
              2: "「映天之章」任务开启说明<label style='float: right;color: #aeacab !important;'>10/24</label>",
            },
            {
              3: "「百货奇货」活动说明<label style='float: right;color: #aeacab !important;'>10/24</label>",
            },
            {
              4: "「映天之章」任务开启说明<label style='float: right;color: #aeacab !important;'>10/24</label>",
            },
            {
              5: "「百货奇货」活动说明<label style='float: right;color: #aeacab !important;'>10/24</label>",
            },
          ],
          咨讯: [
            {
              0: "《原神》拾枝杂谈-「可莉：蹦蹦炸弹」<label style='float: right;color: #aeacab !important;'>10/20</label>",
            },
            {
              1: "《原神》「从驻足到远行」黄龙国家级风景名...<label style='float: right;color: #aeacab !important;'>10/24</label>",
            },
          ],
        },
        c_active: "0",
        crousel: {
          1: require("@/assets/carousel/1.jpg"),
          2: require("@/assets/carousel/2.jpg"),
          3: require("@/assets/carousel/3.jpg"),
        },
      },
    };
  },
  methods: {
    pointClick:function(index){
      this.gonggao.c_active = index-1;
      const img_width = -418;
      let imgContainer = document.querySelector(".imgsSlide");
      imgContainer.style.marginLeft = img_width * this.gonggao.c_active + 'px';
    },
    btnClick: function (s) {
      const img_width = -418;
      const totalCount =
        Object.getOwnPropertyNames(this.gonggao.crousel).length - 1;
      console.log(this.gonggao.c_active, totalCount);
      let imgContainer = document.querySelector(".imgsSlide");
      let left = "";
      if (s == "r") {
        left = img_width * ++this.gonggao.c_active + "px";
      } else {
        if (
          imgContainer.style.marginLeft == "" ||
          imgContainer.style.marginLeft == "0px"
        ) {
          this.gonggao.c_active = totalCount - 1;
          left = img_width * this.gonggao.c_active + "px";
        } else {
          left = img_width * --this.gonggao.c_active + "px";
        }
      }

      if (this.gonggao.c_active >= totalCount || this.gonggao.c_active < 0) {
        this.gonggao.c_active = 0;
        imgContainer.style.marginLeft = 0;
      } else imgContainer.style.marginLeft = left;
      console.log("____________________________");
    },
    glist_show(key) {
      this.gonggao.i_active = key;
      console.log(key);
    },
    point_show(index){
      console.log(index,this.gonggao.c_active);
      return {active: index-1 == this.gonggao.c_active};
    }
  },
  filters: {
    carouselImgLength: function (val) {
      console.log(val, val.length);
      return val.length > 0 ? true : false;
    },
    test:function(value){
      return true;
    }
  },
};
</script>

<style scoped>
/* 轮播图 */
.carousel {
  width: 420px;
  color: #f3f4f6;
}
li {
  list-style: none;
}
.cpics {
  border: 1px solid #eae5dd;
  box-shadow: 0 0 3px #5c5b5a;
  height: 190px;
  position: relative;
  overflow: hidden;
}
.cpics img {
  width: 418px;
  height: 190px;
  display: inline-block;
  margin: 0;
}
/* 展示轮播图 */
.showImgs {
  height: 100%;
  width: 3000px;
  z-index: 2;
  float: left;
  /* animation: slideImgs 10.5 infinite; */
}
.imgsSlide {
  transition: margin-left 0.5s;
}
/* 轮播左右 */
.cpics:hover .car_left,
.cpics:hover .car_right {
  opacity: 0.5;
}
.car_left,
.car_right {
  position: absolute;
  width: 17px;
  height: 100%;
  line-height: 190px;
  text-align: center;
  font-weight: bold;
  font-size: 22px;
  padding: 0 5px;
  background-color: black;
  opacity: 0;
  color: #d0e1eb;
}
.car_left:hover,
.car_right:hover {
  opacity: 0.7 !important;
  color: #ffffff;
}
/* 轮播小圆点 */
.pointDiv {
  width: 100%;
  position: absolute;
  bottom: 0;
  text-align: center;
}
.point {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: 2px solid #8688a6;
  opacity: 0.8;
  margin: 0 4px;
}
.active {
  background: white;
  border-color: white;
  width: 11px;
  height: 11px;
  opacity: 1;
}

/* 公告 */
.gonggao {
  margin-top: 10px;
  height: 110px;
  width: 100%;
  font-size: 10px;
  position: relative;
}
.gtitle {
  font-size: 13px;
  height: 32px;
  line-height: 30px;
  background: #5c5b5a;
  width: 100%;
  overflow: hidden;
}
.gtitle li {
  padding: 0px 20px;
  float: left;
}
.gtitle li:hover {
  color: #ffd284;
  border-bottom: 2px solid #ffd284;
}

/* 公告信息 */
.glist {
  background: #656261;
  box-sizing: content-box;
  width: 100%;
  font-size: 12px;
  height: 110px;
  overflow-y: auto;
}
.glist li {
  padding: 4px 18px;
}
.glist li:hover {
  color: #ffd284;
}
</style>

<style>
</style>