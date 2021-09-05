import { createApp } from 'vue';
import '@/assets/less/global.less';
import 'xiezan-ui/lib/index.css';
import xiezanUI from '@/utils/xiezanUI';
import Ant from '@/utils/ant';
import isLogin from '@/utils/isLogin';
import App from './App.vue';
import { LicenseManager } from '@ag-grid-enterprise/core';
LicenseManager.setLicenseKey(
  'DownloadDevTools_COM_NDEwMjM0NTgwMDAwMA==59158b5225400879a12a96634544f5b6',
);

// 判断目前是否处于登录状态
if (isLogin('/pprice/v5/demo', process.env.NODE_ENV === 'development')) {
  createApp(App)
    .use(Ant)
    .use(xiezanUI)
    .mount('#app');
}
