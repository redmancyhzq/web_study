<template>
<div class="loginBox">
  <div>
    <span class="label">用户登入</span>
  <div/>
  <el-form
    label-width="100px"
    class="form"
  >
    <el-form-item label="用户名:">
      <el-input v-model="userName" />
    </el-form-item>
    <el-form-item label="密码:" type="password">
      <el-input v-model="passWord" />
    </el-form-item>
  </el-form>
  </div>
  <div>
    <el-button type="primary" class='btn' @click="handleLogin">登入</el-button>    
  </div>
</div>
</template>

<script>
import { reactive,toRefs } from 'vue'
import {ElMessage} from 'element-plus'
export default {
  setup() {
    const data = reactive({ //响应式
      userName:"admin",
      passWord:""
    })
    
    const handleLogin= ()=>{
      if(data.userName == 'admin' && data.passWord == '123456') {
        window.location.href = '/home'
      }else {
        ElMessage.error('提示，密码错误')
      }
    }
    return {
      handleLogin,
      ...toRefs(data)
    }
  },
  
}
</script>

<style scoped>
body{
  height: 100%;
  margin: 0px;
}
.loginBox{
  width:500px;
  height:280px;
  border:solid 1px #dedede;
  left: 58%;
  top: 40%;
  position: absolute;
  transform:translate(-50%,-50%);
  padding: 15px;
  border-radius:10px;
  box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.5);
}
    .form{
      margin: 45px 0 40px 0;
      max-width: 420px
    }
    .label{
      color: rgb(192, 187, 187);
      font-size: 20px;
      padding:40px;
    }
</style>