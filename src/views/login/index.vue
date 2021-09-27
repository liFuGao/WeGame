<template>
    <div class="login-content">
        <div class="login-img">
            <img src="../../images/login/login_1.png" alt="">
        </div>

        <div class="login-panel">
            <div class="login-logo">
                <img src="../../images/login/logo.png" alt="">
                <div> WeGame</div>
            </div>

            <div class="login-form">
                <!-- 登陆 -->
                <el-form :model='loginForm' :rules='loginRules' ref='loginForm' @keyup.enter.native="submitForm('loginForm')">
                    <!-- 账号 -->
                    <el-form-item prop='username'>
                        <el-input type='text' v-model="loginForm.username" placeholder='请输入QQ号码' clearable></el-input>
                    </el-form-item>
                    <!-- 密码 -->
                    <el-form-item prop='password'>
                        <el-input type='password' v-model='loginForm.password' placeholder="请输入密码" ></el-input>
                    </el-form-item>
                    <!-- 登录按钮 -->
                    <el-form-item>
                        <el-button @click='submitForm("loginForm")' round type='warning'>登 录</el-button>
                    </el-form-item>
                </el-form>
            </div>


        </div>
    </div>
</template>

<script>
import { login } from '@/api/login'
import store from '@/store'
export default {
    name: 'login',
    data() {
        let validateUsername = (rule , value , callback) => {
            if(!value) {
                callback(new Error('QQ号不能为空'))
            } else {
                callback()
            }
        };
        let validatepassword = (rule , value , callback) => {
            if(value.length < 8) {
                callback(new Error('密码不能小于8位 , 请重新输入密码'))
            } else {
                callback()
            }
        };
        return {
            loginForm: {
                username: '',
                password: ''
            },
            loginRules: {
                username: [
                    {validator: validateUsername , trigger: 'blur'}
                ],
                password: [
                    {validator: validatepassword , trigger: 'blur'}
                ]
            }
        }
    },
    methods: {
        submitForm(formData) {
            this.$refs[formData].validate((valid) => {
                if(valid) {
                    login(this.loginForm).then(res => {
                        if(res.data.state === '200') {
                            store.dispatch('SETTOKEN' , true)
                            this.$router.push('/')
                            this.$message({
                                message: res.data.message,
                                type: 'success'
                            })
                        }else if(res.data.state === '300') {
                            this.$message({
                                message: res.data.message,
                                type: 'warning'
                            })
                        }
                    })
                }else {
                    console.log('err submit');
                    return false
                }
            })
        }
    }
}
</script>

<style >
    .login-content .el-input__inner {
        border-radius: 30px;
        background-color: rgb(20,20,20);
        border: none;
        color: white;
    }

    .login-content .el-form-item__error {
        color: white;
        font-size: 14px;
        font-weight: bolder;
    }
</style>

<style scoped>
    .login-content {
        height: 100%;
        width: 100%;
        overflow: hidden;
    }

    .login-img {
        height: 100%;
        width: 67%;
        float: left;
    }

    .login-img img{
        height: 100%;
        width: 100%;
    }

    .login-panel {
        height: 100%;
        width: 33%;
        background-color: rgb(166,98,64);
        float: left;
    }

    .login-logo {
        height: 30%;
        width: 100%;
        text-align: center;
        padding-top: 40px;
    }

    .login-logo div {
        font-size: 26px;
        color: white;
        font-weight: bolder;
        font-family:Georgia, 'Times New Roman', Times, serif;
    }

    .login-form {
        margin-top: 30px;
        display: flex;
        justify-content: center;
    }

    .el-button {
        width: 100%;
        color: black;
        font-weight: bolder;
        font-size: 16px;
    }
</style>
