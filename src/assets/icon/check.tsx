import React from 'react';

function Icon({ title, titleId, ...props }: any, svgRef: any) {
  return /*#__PURE__*/ React.createElement(
    'svg',
    Object.assign(
      {
        xmlns: 'http://www.w3.org/2000/svg',
        fill: 'currentColor',
        viewBox: '0 0 24 24',
        strokeWidth: '0.1',
        stroke: 'currentColor',
        'aria-hidden': 'true',
        ref: svgRef,
        'aria-labelledby': titleId,
      },
      props,
    ),
    title
      ? /*#__PURE__*/ React.createElement(
          'title',
          {
            id: titleId,
          },
          title,
        )
      : null,
    /*#__PURE__*/ React.createElement('path', {
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      d: 'M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-.997-4L6.76 11.757l1.414-1.414 2.829 2.829 5.656-5.657 1.415 1.414L11.003 16z',
    }),
  );
}

const ForwardRef = React.forwardRef(Icon);
export default ForwardRef;
