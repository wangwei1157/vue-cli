import { message } from 'ant-design-vue';
import axios, { AxiosRequestConfig } from 'axios';
import { downloadFile } from './commonMethods';
message.config({ maxCount: 1 });

const http = (config: AxiosRequestConfig) => {
  return new Promise((resolve, reject) => {
    config.validateStatus = (status) => {
      return status < 500;
    };
    config.headers = { 'x-requested-with': 'XMLHttpRequest' };
    axios(config)
      .then((response: any) => {
        if (response.status == 200) {
          const res = response.data;
          const headers = response.headers;
          // 未登入
          if (headers.is_login === '0' && headers.redirect_url) {
            if (process.env.NODE_ENV === 'production')
              location.href = headers.redirect_url;
          } else if (headers.is_granted === '0') {
            message.error('没有权限,请联系管理员开通权限...');
            reject(res);
          }
          if (
            typeof res !== 'object' ||
            res.code == undefined ||
            res.code == null ||
            (res.code != 500 && res.code != 9999)
          ) {
            // 如果请求头中有一下类型，导出或下载表格的
            if (
              headers['content-type'].includes('application/vnd.ms-excel') ||
              headers['content-type'].includes('application/octet-stream')
            ) {
              const fileName =
                res.headers['Content-disposition'] || '导出列表.xlsx';
              downloadFile(response.data, fileName);
            } else {
              resolve(res);
            }
          } else {
            const errorRes = Object.assign(res || {}, {
              message: '系统错误，请稍后重试...',
            });
            resolve(errorRes);
          }
        } else {
          reject(response.data);
        }
      })
      .catch((error) => {
        message.error('接口异常，请稍后重试');
      });
  });
};

export default http;
