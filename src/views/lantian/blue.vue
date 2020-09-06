<template>
   <div class="login-container">
    <div class="login-form">
        <img  width="200px" height="160px" src="http://120.53.31.103:84/uploads/image/2020-05-27/zmkrHVxaa4fVI5jtcNZ3xGy6KPU0QjXzxPjX7trh.jpeg" alt="">
      <p>欢迎使用后台管理系统</p>
 <el-form ref="form" :rules="rules" :model="form" label-width="80px">
        <el-form-item  prop="name">
          <el-input v-model="form.name" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item  prop="pass">
          <el-input type="password" v-model="form.pass" placeholder="请输入账号"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary"  @click="submitForm('form')" >登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
 form: {
        name: "",
     pass:''
      },
       rules: {
        name: [
          { required: true, message: "账户不能为空", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        pass: [
          { required: true, message: "请输入有效的密码", trigger: "blur" },
          { min: 6, max: 10, message: "长度在 6 到 10 个字符", trigger: "blur" }
        ]
      }
        };
    },
    created() {

    },
    mounted() {

    },
    methods: {
// submitForm(formName) {
  
// }
    }
};
</script>

<style scoped>

.login-container {
  overflow: hidden;
  width: 100%;
  height: 100%;
  position: absolute;
  background: url("http://120.53.31.103:84/adminstyle/img/login_bg.1de8de0c.png");
}
.login-form {
  /* padding: 30px 50px 30px 30px; */
  width: 500px;
  margin: 250px auto;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 20px;
}
.login-form img{
    /* text-align: center; */
    margin-left: 180px;
}
.login-form p {
  text-align: center;
margin-left: 30px;
  color:blue;
  font-size: 20px;
  margin-left: 60px;
}
.login-form button{
    width: 420px;
}
</style>
