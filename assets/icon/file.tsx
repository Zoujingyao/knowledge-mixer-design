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
      d: `
      M9 2.003V2h10.998C20.55 2 21 2.455 21 2.992v18.016a.993.993 0 0 1-.993.992H3.993A1 1 0 0 1 3 20.993V8l6-5.997zM5.83 8H9V4.83L5.83 8zM11 4v5a1 1 0 0 1-1 1H5v10h14V4h-8z`,
    }),
  );
}

const ForwardRef = React.forwardRef(Icon);
export default ForwardRef;
