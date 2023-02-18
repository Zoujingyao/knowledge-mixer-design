import React, { FC, PropsWithChildren, useContext, useEffect, useState } from 'react';
import { TextAreaProps } from './type';
import './index.less';
const TextArea: FC<PropsWithChildren<TextAreaProps>> = (props) => {
  const {
    moreStyle,
    placeholder,
    maxLength,
    handleIptChange,
    handleKeyDown,
    handleIptFocus,
    handleClick,
    handleIptBlur,
    defaultValue,
  } = props;
  const [txaValue, setTxaValue] = useState<string>(defaultValue || '');
  const [isComposition, setComposition] = useState<boolean>(false);
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    handleIptChange && handleIptChange(txaValue);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [txaValue]);
  const onChangeTxa = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (maxLength && !isComposition && maxLength < e.target.value.length) {
      setTxaValue(e.target.value.slice(0, maxLength));
    } else {
      setTxaValue(e.target.value);
    }
  };
  const onCompositionStartTxa = (e: React.CompositionEvent<HTMLTextAreaElement>) => {
    setComposition(true);
  };
  const onCompositionEndTxa = (e: React.CompositionEvent<HTMLTextAreaElement>) => {
    setComposition(false);
    if (maxLength) {
      setTxaValue(txaValue.slice(0, maxLength));
    }
  };

  const blurTxa = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    handleIptBlur && handleIptBlur(e);
  };
  const focusTxa = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    handleIptFocus && handleIptFocus(e);
  };
  const txaHandleClick = (e: React.MouseEvent<HTMLTextAreaElement>) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    handleClick && handleClick(e);
  };
  return (
    <div>
      <textarea
        className="textarea"
        style={moreStyle}
        placeholder={placeholder}
        value={defaultValue || txaValue}
        onChange={onChangeTxa}
        onBlur={blurTxa}
        onFocus={focusTxa}
        onKeyUp={(e) => handleKeyDown && handleKeyDown(e)}
        onClick={txaHandleClick}
        onCompositionStart={onCompositionStartTxa}
        onCompositionEnd={onCompositionEndTxa}
       />
    </div>
  );
};
export default React.memo(TextArea);
