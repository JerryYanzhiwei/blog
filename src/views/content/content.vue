<template>
  <div class="content_contain">
    <div class="first_section">
      <div class="recommand_contain">
        <div class="recommand_title">
          Welcome To Our Inn.
        </div>
        <div class="todays_block">
          <div class="todays_cover">
            <img src="../../assets/img/text_bg.jpg" alt="">
            <div class="todays_text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta illo eaque animi, assumenda molestias odio neque nihil, dolorum excepturi sint asperiores. Repellat ea rerum sint ducimus sunt omnis quos amet.
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
export default {

}
</script>

<style lang="scss" type="text/css">
// 继承区域
@mixin title {
  font-size: 50px;
  font-weight: bold;
}

.content_contain {
  height: 100%;
  padding-top: 500px;
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
          img{
            width: 100%;
            height: auto;
          }
          .todays_text {
            margin-top: 20px;
            font-size: 22px;
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
</style>
