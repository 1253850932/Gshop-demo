<template lang="">
  <div class="loginContainer">
    <a class="go_back" @click="$router.back()">
      <svg class="icon one" aria-hidden="true">
        <use xlink:href="#icon-dayufuhao"></use>
      </svg>
    </a>
    <suspense>
      <div class="loginInner">
        <!-- 登录头部 -->
        <div class="login_header">
          <h2 class="login_logo">在线外卖</h2>
          <div class="login_header_title">
            <a
              href="javascript:void(0)"
              class="login"
              :class="{ on: loginWay }"
              @click="loginWay = true"
              >短信登录</a
            >
            <a
              href="javascript:void(0)"
              class="login"
              :class="{ on: !loginWay }"
              @click="loginWay = false"
              >密码登录</a
            >
            <div class="s" :class="{ ss: !loginWay }"></div>
          </div>
        </div>
        <!-- 登录主题 -->
        <div class="login_content">
          <form action="" @submit.prevent="login">
            <!-- 短信登录部分 -->
            <div class="" v-show="loginWay" @click="loginWay = true">
              <div class="login_message">
                <input
                  type="tel"
                  maxlength="11"
                  placeholder="手机号"
                  v-model="phone"
                />
                <button
                  :disabled="!rightPhone"
                  class="get_tel"
                  :class="{ right_phone: rightPhone }"
                  @click.prevent="getCode"
                >
                  {{
                    computeTime > 0 ? `倒计时(${computeTime})s` : "获取验证码"
                  }}
                </button>
              </div>
              <div class="login_verification">
                <input
                  type="tel"
                  maxlength="6"
                  placeholder="验证码"
                  v-model="code"
                />
              </div>
              <div class="login_hint">
                温馨提示：未注册外卖帐号的手机号，登录时将自动注册，且代表已同意
                <a href="">《用户服务协议》</a>
              </div>
            </div>

            <!-- 密码登录部分 -->
            <div v-show="!loginWay" @click="loginWay = false">
              <div class="login_message">
                <input
                  type="text"
                  maxlength="11"
                  placeholder="手机/邮箱/用户名"
                  v-model="name"
                />
              </div>
              <div class="login_verification">
                <input
                  type="text"
                  maxlength="11"
                  placeholder="密码"
                  v-if="showPwd"
                  v-model="pwd"
                />
                <input
                  type="password"
                  maxlength="11"
                  placeholder="密码"
                  v-else
                  v-model="pwd"
                />
                <div
                  class="switch_button"
                  :class="showPwd ? 'on' : 'off'"
                  @click="showPwd = !showPwd"
                >
                  <div class="switch_circle" :class="{ right: showPwd }"></div>
                  <span class="switch_text">{{ showPwd ? "abc" : "..." }}</span>
                </div>
              </div>
              <div class="login_message">
                <input
                  type="text"
                  maxlength="4"
                  placeholder="验证码"
                  v-model="captcha"
                />
                <img
                  class="get_verification"
                  src="http://localhost:4000/captcha"
                  alt="captcha"
                  @click="getCaptcha"
                  ref="changeCaptcha"
                />
              </div>
            </div>
            <button class="login_submit">登录</button>
          </form>
          <a class="about_us">关于我们</a>
        </div>
      </div>
    </suspense>
    <AlertTip :alertText="alertText" v-show="alertShow" @closeTip="closeTip" />
  </div>
</template>
<script>
import AlertTip from "../../components/alertTIp/alertTip.vue";
import { reqSendCode, reqSmsLogin, reqPwdLogin } from "../../api";
import { useRouter } from "vue-router";
import {useStore} from 'vuex'
import {
  ref,
  computed,
  onMounted,
  watch,
  nextTick,
  reactive,
  defineComponent,
} from "vue";
export default defineComponent({
  data() {
    return {
      loginWay: true,
      phone: "",
      code: "",
      name: "",
      pwd: "",
      captcha: "",
      alertText: "",
      alertShow: false,
    };
  },
  computed: {
    rightPhone() {
      return /^1\d{10}$/.test(this.phone);
    },
    rightCode() {
      return /^\d{6}$/.test(this.code);
    },
  },
  methods: {
    // alertShowMessage(text){
    // 	this.alertShow = true;
    //     this.alertText = text;
    // },
    // login() {
    //   if (this.loginWay) {
    //     const { rightPhone, phone, code } = this;
    //     if (!this.rightPhone) {
    // 		this.alertShowMessage('手机号不正确')
    //     } else if (!this.rightCode) {
    // 		this.alertShowMessage('验证码不正确')
    //     }
    //   }else{
    // 	  const {name,pwd,captcha} = this;
    // 	  if(!this.name){
    // 		  this.alertShowMessage('验证必须是6位数字')
    // 	  }else if(!this.pwd){
    // 		  this.alertShowMessage('密码必须指定')
    // 	  }else if(!this.captcha){
    // 		  this.alertShowMessage('验证码必须指定')
    // 	  }
    //   }
    // },
    closeTip() {
      this.alertShow = false;
      this.alertText = "";
    },
  },
  setup() {
    const loginWay = ref(true); //true 代表短信登录，false代表密码登录
    const phone = ref(""); //手机号
    let computeTime = ref(0); //计时的时间
    const showPwd = ref(false); //是否显示密码
    const pwd = ref(""); //密码
    const code = ref(""); //短信验证码
    const name = ref(""); //用户名
    const captcha = ref(""); //图形验证码
    let alertText = ref(""); //提示文本
    let alertShow = ref(false); //是否显示警告框
    const changeCaptcha = ref(null); //
    // 计时器
    const intervalId = ref("");
    const router = useRouter();
	const store  = useStore();
    // 异步获取短信验证码
    const getCode = async () => {
      // 如果当前没有倒计时
      if (!computeTime.value) {
        // 启动倒计时
        computeTime.value = 30;
        intervalId.value = setInterval(() => {
          computeTime.value--;
          if (computeTime <= 0) {
            clearInterval(intervalId);
          }
        }, 1000);
      }
      //   发送ajax请求（向指定手机发送验证码短信）
      console.log(phone.value);
      const result = await reqSendCode(phone.value);
      console.log(result);
      if (result.code === 1) {
        //   显示提示
        alertShowMessage(result.msg);
		store.commit('ChangeCode',false)
        // 停止计时
        if (computeTime) {
          computeTime.value = 0;
          clearInterval(intervalId.value);
          intervalId.value = "";
        }
      }else{
		store.commit('ChangeCode',true)
	  }
    };

    // 警告框提示
    let alertShowMessage = (Text) => {
      alertShow.value = true;
      alertText.value = Text;
      console.log(Text);
      console.log(alertShow);
    };

    // 异步验证登录
    let login = async () => {
      let result;
      if (loginWay.value) {
        if (!phone.value) {
          alertShowMessage("手机号为空");
          return;
        } else if (!/^\d{6}$/.test(code.value)) {
          alertShowMessage("验证码不正确");
          return;
        }
        // 发送ajax请求短信登录
        result = await reqSmsLogin(phone.value, code.value);
      } else {
        if (!name.value) {
          alertShowMessage("验证必须是6位数字");
          return;
        } else if (!pwd.value) {
          alertShowMessage("密码必须指定");
          return;
        } else if (!captcha.value) {
          alertShowMessage("验证码必须指定");
          return;
        }
        // 发送ajax请求密码登录
        result = await reqPwdLogin({
          name: name.value,
          pwd: pwd.value,
          captcha: captcha.value,
        });
      }
      // 停止计时
      if (computeTime) {
        computeTime.value = 0;
        clearInterval(intervalId.value);
        intervalId.value = "";
      }
      //   根据结果处理数据
      if (result.code === 0) {
        const user = result.data;
        // 将user保存到vuex中的state
		store.dispatch('recordUser',user)
		store.commit('ChangeCode',true)
        // 跳转到个人中心
        router.replace("/profile");
      } else {
        //   显示警告提示
        alertShowMessage(result.msg);
        // 	  显示新的图片验证码
        getCaptcha();
		store.commit('ChangeCode',false)

      }
    };
    // 改变验证码图片
    const getCaptcha = () => {
      changeCaptcha.value.src =
        "http://localhost:4000/captcha?time=" + Date.now();
    };

    return {
      loginWay,
      phone,
      getCode,
      computeTime,
      pwd,
      showPwd,
      code,
      name,
      captcha,
      alertText,
      alertShow,
      login,
      getCaptcha,
      changeCaptcha,
    };
  },
});
</script>
<style lang="less" scoped>
.loginContainer {
  .go_back {
    position: absolute;
    top: 5px;
    left: 5px;
    width: 30px;
    height: 30px;
    transform: rotate(180deg);
  }
  width: 15rem;
  background-color: #fff;
  //   .on {
  //     color: #02a774;
  //     font-weight: 700;

  //     border-bottom: 2px solid #02a774;
  //   }

  .ss {
    left: 58% !important;
  }
  .s {
    position: absolute;
    display: block;
    width: 2.24rem;
    height: 1px;
    left: 28%;
    border-bottom: 1px solid #02a774;
    transition: all 1s;
    animation: identifier;
    @keyframes identifier {
      0% {
        transform: translateX(0%);
      }
      50% {
        transform: translateX(50%);
      }
      100% {
        transform: translateX(100%);
      }
    }
  }
  .loginInner {
    padding-top: 2.4rem;
    width: 12rem;
    height: 17.6rem;
    margin: 0 auto;
    .login_header {
      width: 12rem;
      height: 3.84rem;
      .login_logo {
        width: 12rem;
        height: 1.6rem;
        font-size: 1.6rem;
        font-weight: bold;
        color: #02a774;
        text-align: center;
      }
      .login_header_title {
        text-align: center;
        padding-top: 1rem;
        .login {
          display: inline-block;
          height: 1.444rem;
          font-size: 0.56rem;
          line-height: 1.6rem;
          margin-right: 1rem;
          margin-left: 1.2rem;
        }
      }
    }
  }
  .login_content {
    width: 12rem;
    height: 10.72rem;
    font-size: 14px;
    .login_message {
      width: 12rem;
      height: 1.92rem;
      position: relative;
      text-align: center;
      margin-top: 0.64rem;
      .get_tel {
        position: absolute;
        top: 50%;
        right: 10px;
        transform: translateY(35%);
        border: 0;
        color: #ccc;
        font-size: 14px;
        background: transparent;
        &.right_phone {
          color: black;
        }
      }
      img {
        position: absolute;
        top: 30%;
        right: 0;
      }
    }
    input {
      position: relative;
      width: 12rem;
      height: 1.92rem;
      margin-top: 16px;
      height: 48px;
      background: #fff;
      text-transform: none;
      text-indent: 0px;
      text-shadow: none;
      display: inline-block;
      text-align: start;
      appearance: auto;
      -webkit-rtl-ordering: logical;
      cursor: text;
      background-color: -internal-light-dark(
        rgb(255, 255, 255),
        rgb(59, 59, 59)
      );
      text-rendering: auto;
      color: -internal-light-dark(black, white);
      letter-spacing: normal;
      word-spacing: normal;
      writing-mode: horizontal-tb !important;
      padding-left: 10px;
      box-sizing: border-box;
      border: 1px solid #ddd;
      border-radius: 4px;
      outline: 0;
      font: 400 14px Arial;
      &:focus {
        border: 1px solid #02a774;
      }
    }
    .login_verification {
      margin-top: 0.64rem;
      position: relative;
      .switch_button {
        font-size: 12px;
        border: 1px solid #ddd;
        border-radius: 0.32rem;
        transition: background-color 0.3s, border-color 0.3s;
        padding: 0 0.24rem;
        width: 1.2rem;
        height: 0.64rem;
        line-height: 0.64rem;
        color: #fff;
        position: absolute;
        top: 50%;
        right: 0.4rem;
        transform: translateY(-20%);
        &.on {
          background-color: #02a774;
        }
        .switch_circle {
          position: absolute;
          top: -0.04rem;
          left: -0.04rem;
          width: 0.64rem;
          height: 0.64rem;
          border: 1px solid #ddd;
          border-radius: 50%;
          background: #fff;
          box-shadow: 0 2px 4px 0 rgb(0 0 0 / 10%);
          transition: transform 0.45s linear;
          &.right {
            transform: translateX(1.2rem);
          }
        }
        .switch_text {
          float: right;
          color: #ddd;
          margin-right: 10px;
        }
      }
    }
    .login_hint {
      margin-top: 12px;
      color: #999;
      font-size: 14px;
      line-height: 20px;
      a {
        color: #02a774;
      }
    }
    .login_submit {
      display: block;
      width: 100%;
      height: 1.68rem;
      margin-top: 1.2rem;
      border-radius: 0.16rem;
      background: #4cd96f;
      color: #fff;
      text-align: center;
      font-size: 16px;
      line-height: 1.68rem;
      border: 0;
    }
    .about_us {
      display: block;
      font-size: 12px;
      margin-top: 20px;
      text-align: center;
      color: #999;
    }
  }
}
</style>
