// 下载
export const downloadFile = (data: any, fileName: string) => {
  // 文件导出
  const url = window.URL.createObjectURL(
    new Blob([data], {
      type: 'application/vnd.ms-excel',
    }),
  );
  const link = document.createElement('a');
  link.style.display = 'none';
  link.href = url;
  link.setAttribute('download', fileName);

  document.body.appendChild(link);
  link.click();
};
