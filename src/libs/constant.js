
let Constant = {};
Constant.USER = {};

Constant.USER.PASSWORD_LENGTH = 8;

Constant.USER.LOGIN_CAPTCHA_URL = "http://manager.sportsdb.cc:9001/user/loginCaptcha";
Constant.USER.REGISTER_CAPTCHA_URL = "http://manager.sportsdb.cc:9001/user/registerCaptcha";
Constant.USER.REGISTER_URL = "http://manager.sportsdb.cc:9001/user/register";
Constant.USER.LOGIN_URL = "http://manager.sportsdb.cc:9001/user/login";

Constant.USER.LOGIN_LOADING = "正在登录，请稍后...";
Constant.USER.REGISTER_LOADING = "正在注册，请稍后...";
Constant.USER.DATA_LOADING = "加载数据，请稍后...";
Constant.USER.LOGIN_TIMEOUT = "登录超时，请重试";
Constant.USER.PASSWORD_NOT_BLANK = "密码不能为空";
Constant.USER.PASSWORD_CONFIRM_ERROR = "密码不相等";
Constant.USER.PASSWORD_LENGTH_ERROR = "密码长度至少有" + Constant.USER.PASSWORD_LENGTH + "个字符";
Constant.USER.GENERATE_SIGN_ERROR = "生成签名失败";

export default Constant;