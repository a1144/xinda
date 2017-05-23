<template>
  <section class="wrapper">
    <div class="head b mu">
      <div class="h-logo fl">
        <a href=""><img src="static/logo.png" alt=""></a>
      </div>
      <div class="line fl" style="height: 37px;width: 1px;margin:37px 20px;background: #ccc;"></div>
      <p class="fl" style="">欢迎登陆</p>
    </div>
    <div class="main-container mu">
      <div class="m-left fl">
        <input type="text" class="ax_default" placeholder="请输入用户名">
        <input type="password" class="ax_default" placeholder="请输入密码">
        <input type="text" class="ax_default" placeholder="请输入验证码">
        <p class="fl ax_default"  style=" width: 100px; height: 41px;margin-bottom: 15px;line-height: 41px;">验证码</p>
        <a href="#" class="fr" style="width: 73px;height: 23px;margin-bottom: 15px;display: block;">忘记密码</a>
        <input type="submit" style="boder:1px solid #85d497;border-radius:3px;font:400 16px/37px 'Microsoft Himalaya';color: #85d497;text-align: center;" class="ax_default" placeholder="立即登陆">
      </div>
      <div class="m-line fl" style="width:1px;height: 273px;background: #ccc;margin: 0px 170px 0px 150px;"></div>
      <div class="m-right fl">
        <img src="static/people.png" alt="">
      </div>
    </div>
  </section>
</template>
<script>
  export default{
      data(){
          return{

          }
      },
      methods:{

      }
  }
</script>
<style scoped>
  .b{
    border:1px solid red;
  }
  .fr{
    float: right;
  }
  .fl{
    float: left;
  }
  .clearfix{}
  .clearfix:after{
    clear:both;
    content:'.';
    line-height: 0;
    display: block;
  }
  .wrapper{
    padding-bottom: 160px;
    padding-top: 23px;
    background: #ccc;
  }
  .mu{
    width: 950px;
    margin: 0 auto;
  }
  .head{
    padding: 0 150px;
    height: 100px;
    position: relative;
    left: 0;
    top: 0;
    background: #fff;
  }
  .head .h-logo {
    padding-top: 10px;
  }
  .head >p {
    font-size: 16px;
    color: #aaaaaa;
    line-height: 100px;
  }
  .main-container{
    height: 360px;
    margin: 23px auto 160px;
    padding:60px 150px;
    background: #fff;
  }
  .m-left{
    width: 285px;

  }
  .m-left input{
    width: 281px;
    height: 37px;
    margin-bottom: 15px;
    float: left;
  }
  .m-left input:nth-child(3){
    width: 172px;
    height: 37px;
  }
  .ax_default {
    font-family: 'Arial Normal', 'Arial';
    font-weight: 400;
    font-style: normal;
    font-size: 13px;
    color: #333333;
    text-align: center;
    line-height: normal;
  }
</style>
