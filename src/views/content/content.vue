<template>
  <div class="content_contain">
    <div class="first_section">
      <div class="recommand_contain">
        <div class="recommand_title">
          Today's Recommend
        </div>
        <div class="todays_block">
          <div class="todays_cover">
            <div class="myswiper">
              <swiper ref="myswiper" :options="swiperOption">
                <swiper-slide v-for="(item, index) in recommendData" :key="index" >
                  <img :src="item.imgUrl" alt="">
                </swiper-slide>
              </swiper>
              <div class="swiper-pagination"  slot="pagination"></div>
            </div>
            <div class="todays_text">
              <div class="text_contain" v-for="(item, index) in recommendData" :key="index" v-show="realIndex == index">
                <div class="title">
                  {{item.title}}
                </div>
                <div class="item_details">
                  {{item.content}}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="recommand_side">
        <div class="side_title">
          recommand
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    let that = this
    return {
      homeState: 0,
      realIndex: 0,
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 0,
        mousewheel: true,
        autoplay: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        on: {
          init: function () {
            // this.realIndex === 0 && (that.homeState = 0)
          },
          slideChange: function () {
            that.realIndex = this.realIndex
          }
        }
      },
      recommendData: []
    }
  },
  mounted () {
    this.getArticles()
  },
  methods: {
    ...mapActions('article', ['getArticle']),
    async getArticles () {
      let res = await this.getArticle()
      if (res.code === 200) {
        if (res.data.length > 3) {
          this.recommendData = res.data.slice(0, 3)
        } else {
          this.recommendData = res.data
        }
      }
      console.log(res)
    }
  }
}
</script>

<style lang="scss" type="text/css">
// 继承区域
@mixin title {
  font-size: 36px;
  font-weight: bold;
}

.content_contain {
  height: 100%;
  padding-top: 500px;
  padding-bottom: 50px;
  width: 1280px;
  margin: 0 auto;
  text-align: left;
  .first_section {
    display: flex;
    flex-direction: row;
    .recommand_contain {
      margin-top: 50px;
      width: 800px;
      .recommand_title {
        @include title
      }
      .todays_block{
        margin-top: 20px;
        .todays_cover {
          border-radius: 10px;
          .myswiper {
            position: relative;
          }
          img{
            width: 100%;
            height: auto;
          }
          .todays_text {
            margin-top: 20px;
            font-size: 22px;
            .text_contain {
              .item_details {
                margin-top: 10px;
                background-color: #c6c9d0;
                font-size: 16px;
                overflow : hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
              }
            }
          }
        }
      }
    }
    .recommand_side{
      margin-top: 50px;
      margin-left: 80px;
      width: 400px;
      .side_title {
        @include title
      }
    }
  }
}

.swiper-container {
  width: 800px;
  height: 450px;
  border-radius: 10px;
  overflow: hidden;
}
.swiper-pagination {
  bottom: 10px;
  left: 50%;
  width: 106px;
  margin-left: -55px;
}
.swiper-container-vertical > .swiper-pagination-bullets {
  width: 2vw;
}
.swiper-pagination-bullet {
  width: 30px;
  background-color: #fff;
  border-radius: 5px;
  margin-left: 5px;
  outline: none;
}
.swiper-pagination-bullet-active {
  background-color: #fff;
}
</style>
