import React, { ReactNode, useRef, useState } from 'react';
import { message } from 'antd';
import SignatureCanvas from 'react-signature-canvas';
import classNames from 'classnames';
import { useDebounce, useSize, useUpdateEffect } from 'ahooks';
import { downloadByLink } from '@/utils';
import { Button, IconFont } from '@/src';
import { ButtonProps, ButtonType } from '../Button/types';
import styles from './index.less';

export interface SignatureProps {
  /** 中心提示背景字 */
  tipText?: ReactNode;
  /** 底部内容 */
  footer?: React.ReactNode;
  /** 确认按钮文字 */
  okText?: React.ReactNode;
  /** 确认按钮类型 */
  okType?: ButtonType;
  /** 确定按钮 loading */
  confirmLoading?: boolean;
  /** 取消按钮文字 */
  cancelText?: React.ReactNode;
  okButtonProps?: ButtonProps;
  cancelButtonProps?: ButtonProps;
  /** 签名图文件名 */
  fileName?: string;
  /** 右上脚清空图标 */
  clearIcon?: ReactNode;
  /** 样式类名 */
  className?: string;
}

const Signature: React.FC<SignatureProps> = (props) => {
  const {
    footer,
    okText,
    okType = 'primary',
    confirmLoading,
    cancelText,
    okButtonProps,
    cancelButtonProps,
    tipText = '签名区',
    fileName = '签名',
    className,
    clearIcon,
  } = props;

  const [initialWindowSize, setInitialWindowSize] = useState<number>();
  const lastFormRef = useRef(null);
  const sigPad = useRef<any>();
  const windowSize = useSize(lastFormRef);
  const debouncedWindowSize = useDebounce(windowSize?.width, { wait: 500 });

  useUpdateEffect(() => {
    if (!initialWindowSize && debouncedWindowSize) {
      setInitialWindowSize(debouncedWindowSize);
      return;
    }
    if (initialWindowSize && debouncedWindowSize !== initialWindowSize) {
      message.info('浏览器屏幕变化，请重新签名');
    }
  }, [debouncedWindowSize]);

  const clear = () => {
    sigPad.current?.clear();
  };

  const trim = async () => {
    if (sigPad.current?.isEmpty()) {
      message.info('请手写签名');
      return;
    }
    const signUrl = sigPad.current?.getCanvas().toDataURL('image/png');
    if (signUrl) {
      downloadByLink(signUrl, fileName);
    }
  };

  return (
    <div ref={lastFormRef}>
      <div className={classNames(styles.sign, className)}>
        <div className={styles.signInfo}>{tipText}</div>
        <div className={styles.signIcon} onClick={clear}>
          {clearIcon || <IconFont type="icon-guanbi" className={styles.signIconClear} />}
        </div>
        <SignatureCanvas canvasProps={{ className: styles.signCanvas }} ref={sigPad} />
      </div>
      <div className={styles.option}>
        {footer === undefined ? (
          <>
            <Button onClick={clear} {...cancelButtonProps}>
              {cancelText || '重写'}
            </Button>
            <Button type={okType} loading={confirmLoading} onClick={trim} {...okButtonProps}>
              {okText || '保存'}
            </Button>
          </>
        ) : (
          footer
        )}
      </div>
    </div>
  );
};

export default Signature;
