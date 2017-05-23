<template>

  <div class="hello">

    <ul>
      
      <div id="p1" class="ax_default text_field" align="center">
        <input id="p1_phone" type="text" value="" placeholder="请输入手机号"><br><br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input id="p1_yanzhengma" type="text" value="" placeholder="请输入验证码">
        <img id="p1_yanzhengma" class="img" src="static/yanzhengma.jpg">
        <br><br>
        <input id="p1_duanxinma" type="text" value="" placeholder="请输入短信验证码">
        <input id="p1_submit1" type="submit" value="点击获取">
        <br><br>
        <input id="p1_newpassword" type="password" value="" placeholder="请输入新密码"><br><br>
        <input id="p1_newpassword1" type="password" value="" placeholder="请再次输入新密码"><br><br>
        <input id="p1_submit2" type="submit" value="确认修改">

      </div>
    </ul>
  </div>
</template>

<script>
// export default {
//   name: 'hello',
//   data () {
//     return {
//       msg: 'Welcome to Your Vue.js App2222222'
//     }
//   }
// }
export default {
        data: function(){
            return {
                ruleForm: {
                    username: '',
                    password: ''
                },
                rules: {
                    username: [
                        { required: true, message: '请输入用户名', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            submitForm(formName) {
                const self = this;
                self.$refs[formName].validate((valid) => {
                    if (valid) {
                        localStorage.setItem('ms_username',self.ruleForm.username);
                        self.$router.push('/readme');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
