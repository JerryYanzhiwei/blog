<template>
    <el-row class="main_contain">
      <el-col class="header" :span="24">
        <div class="title">
          Jerry&Jean's Inn.
        </div>
        <div class="tag_contain">
          <a href="/" @mousemove="move_style" @mouseout="move_out">Home</a>
          <a href="/" @mousemove="move_style" @mouseout="move_out">Article</a>
          <a href="/" @mousemove="move_style" @mouseout="move_out">About</a>
        </div>
      </el-col>
      <router-view/>
      <welcome></welcome>
    </el-row>
</template>

<script>
// @ is an alias to /src
import welcome from '@/components/welcome.vue'

export default {
  name: 'home',
  components: {
    welcome
  },
  data () {
    return {
    }
  },
  methods: {
    move_out (e) {
      e.target.style.background = 'transparent'
    },
    move_style (e) {
      // alert(111)
      var width = e.target.offsetWidth
      // var height = e.offsetHeight
      var left = e.target.offsetLeft
      // var topD = e.offsetTop
      var currentLeft = e.clientX
      // var currentTop = event.clientY
      var pre = (currentLeft - left) / width * 100
      e.target.style.backgroundImage = 'linear-gradient(to right, #2B8899 0%, #000 ' + pre + '%)'
    }
  }
}
</script>
<style lang="scss" scoped>
.main_contain{
  width: 100%;
  height: 100%;
  .header{
    // height: 60%;
    height: 500px;
    background-image: url('../../assets/img/desk.jpg');
    background-size: cover;
    background-attachment: fixed;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .title {
      font-size: 50px;
      font-weight: bold;
    }
    .tag_contain {
      margin-top: 30px;
      a {
        display: inline-block;
        height: 30px;
        width: 80px;
        color: #fff;
        padding: 5px;
        border: 1px solid #fff;
        border-radius: 20px;
        margin-left: 30px;
        &:first-child{
          margin: 0;
        }
      }
    }
  }
}
</style>
