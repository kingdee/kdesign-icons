import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const PreBidEstimation = ({
  size = '1em',
  fill = 'currentColor',
  rotate = 0,
  spin = false,
  ...restProps
}: SvgIconProps) => {
  return (
    <IconWrapper rotate={rotate} spin={spin} {...restProps}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          id="584.标前估算（标底）"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(4.000000, 2.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M10.8427455,24.6177334 L13.2649359,27.1008118 L10.9480017,27.9584178 C10.4910536,28.1275557 9.98351062,27.8942394 9.81437262,27.4372913 C9.73247162,27.2160251 9.74261034,26.9711726 9.84252396,26.7574348 L10.8427455,24.6177334 Z M19.7389448,15.5000544 L22.2261177,18.0684042 L14.0495066,26.4441271 L11.5623337,23.8757773 L19.7389448,15.5000544 Z M18.6847884,0 C19.1720349,0 19.5670263,0.39499137 19.5670263,0.882237932 L19.5670263,14.1234986 L9.44032152,24.6177334 L0.882237932,24.6177334 C0.39499137,24.6177334 0,24.2227421 0,23.7354954 L0,0.882237932 C0,0.39499137 0.39499137,0 0.882237932,0 L18.6847884,0 Z M22.7963116,14.0252277 L23.6731758,14.9241342 C24.1108623,15.3728231 24.1067895,16.1044668 23.6738589,16.5482803 L22.918304,17.322828 L20.4564365,14.7990751 L21.2119914,14.0245274 C21.6493007,13.5762252 22.3565356,13.5743967 22.7963116,14.0252277 Z M3.57090859,8.83394023 C3.56206361,8.97301562 3.55764113,9.11334665 3.55764113,9.25444424 C3.55764113,12.8550247 6.40487684,15.7735847 9.91717121,15.7735847 C12.9878059,15.7735847 15.550221,13.5425736 16.1454587,10.5751545 L14.6506753,9.73214067 C14.4167292,12.2009727 12.3866665,14.1303658 9.91667807,14.1303658 C8.00656323,14.1303658 6.35941124,12.9761937 5.60292803,11.3108122 L7.14047251,11.3108122 L7.13751362,11.3065232 L3.57090859,8.83394023 Z M11.5768008,6.1700988 L9.9169326,7.51900855 L8.27446337,6.21436178 L7.79583777,6.69307484 L9.61391903,8.1713319 L7.79583777,8.1713319 L7.79583777,8.82365526 L9.61391903,8.82365526 L9.61391903,10.1283021 L7.79583777,10.1283021 L7.79583777,10.7806254 L9.61391903,10.7806254 L9.61391903,12.7375956 L10.2199462,12.7375956 L10.2199462,10.7806254 L12.0380274,10.7806254 L12.0380274,10.1283021 L10.2199462,10.1283021 L10.2199462,8.82365526 L12.0380274,8.82365526 L12.0380274,8.1713319 L10.2199462,8.1713319 L12.0380274,6.69307484 L11.5768008,6.1700988 Z M9.91718713,2.73530373 C6.98318807,2.73530373 4.51319964,4.77229763 3.7795766,7.54170394 L5.18758052,8.72963377 C5.44319366,6.28348629 7.46291611,4.37850632 9.91667807,4.37850632 C11.8194274,4.37850632 13.4609321,5.52359478 14.2215832,7.17814783 L12.6943472,7.61677006 L16.2762082,9.27636234 L16.2762082,9.25442794 C16.2762082,5.6541084 13.429227,2.73530373 9.91718713,2.73530373 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
PreBidEstimation.displayName = 'PreBidEstimation';
export default PreBidEstimation;
