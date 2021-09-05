import Cookies from 'js-cookie';

// 重定向到目标页面
function preLogin(targetUrl: string): void {
  window.location.href = '/user/employee/pre-login?returnUrl=' + targetUrl;
}

// 得到当前登录状态
function getCurStatus(isDev: boolean): boolean {
  const TICKET = Cookies.get('ticket');
  const JSESSIONID = Cookies.get('JSESSIONID');
  const resultStatus = TICKET && JSESSIONID ? true : false;

  return resultStatus;
}

// 获取目标页面url和当前环境,返回login登录状态
export default (returnUrl: string, isDev = false): boolean => {
  const result = getCurStatus(isDev);
  result || preLogin(returnUrl);

  return result;
};
