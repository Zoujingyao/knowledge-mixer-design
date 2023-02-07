import React from 'react';

function Icon({ title, titleId, ...props }: any, svgRef: any) {
  return /*#__PURE__*/ React.createElement(
    'svg',
    Object.assign(
      {
        xmlns: 'http://www.w3.org/2000/svg',
        fill: 'currentColor',
        viewBox: '0 0 1024 1024',
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
      fill: '#cdcdcd',
      d: 'M512.201 448.08L885.643 74.638c42.426-42.426 106.066 21.214 63.64 63.64L575.84 511.719l374.353 374.353c42.426 42.427-21.213 106.066-63.64 63.64L512.201 575.359 137.848 949.712c-42.426 42.426-106.066-21.213-63.64-63.64L448.563 511.72 75.12 138.278c-42.427-42.426 21.213-106.066 63.64-63.64L512.2 448.08z',
    }),
  );
}

const ForwardRef = React.forwardRef(Icon);
export default ForwardRef;

{
  /* <svg
  t="1675739450674"
  class="icon"
  viewBox="0 0 1024 1024"
  version="1.1"
  xmlns="http://www.w3.org/2000/svg"
  p-id="884"
  width="200"
  height="200"
>
  <path d="" p-id="885" fill="#cdcdcd"></path>
</svg>; */
}
