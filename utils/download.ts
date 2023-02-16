import { message } from 'antd';

/**
 * 本地文件a标签方式下载
 * @param fileUrl
 * @param fileName
 * @returns
 */
export const downloadByLink = (fileUrl: string | undefined, fileName?: string) => {
  if (fileUrl && fileUrl.startsWith('data:')) {
    const link = document.createElement('a');
    link.href = fileUrl;
    link.style.display = 'none';
    link.setAttribute('download', fileName || 'download');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => window.URL.revokeObjectURL(link.href), 7000);
    message.success('下载成功');
  }
};
