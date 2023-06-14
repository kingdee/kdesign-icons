import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const QuestionSolid = ({
  size = '1em',
  color = 'currentColor',
  rotate = 0,
  spin = false,
}: SvgIconProps) => {
  return (
    <IconWrapper rotate={rotate} spin={spin}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          id="54.问号"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="问号"
            transform="translate(4.000000, 4.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M12,0 C18.627417,0 24,5.372583 24,12 C24,18.627417 18.627417,24 12,24 C5.372583,24 0,18.627417 0,12 C0,5.372583 5.372583,0 12,0 Z M12,16.2857143 C11.2899196,16.2857143 10.7142857,16.8613482 10.7142857,17.5714286 C10.7142857,18.2815089 11.2899196,18.8571429 12,18.8571429 C12.7100804,18.8571429 13.2857143,18.2815089 13.2857143,17.5714286 C13.2857143,16.8613482 12.7100804,16.2857143 12,16.2857143 Z M12,5.14285714 C10.1064523,5.14285714 8.57142857,6.67788085 8.57142857,8.57142857 C8.57142857,9.04481546 8.95518454,9.42857143 9.42857143,9.42857143 C9.90195832,9.42857143 10.2857143,9.04481546 10.2857143,8.57142857 C10.2857143,7.62465471 11.0532261,6.85714286 12,6.85714286 C12.9467739,6.85714286 13.7142857,7.62465471 13.7142857,8.57142857 C13.7142857,9.1077391 13.522542,9.62428037 13.177018,10.0294009 L13.0561997,10.1601886 L12.8591223,10.3572661 C12.4148181,10.8015702 12.0154876,11.2886751 11.6669468,11.8114864 C11.3631842,12.2671303 11.1853484,12.7936357 11.1495796,13.3376956 L11.1428571,13.542437 L11.1428571,13.7142857 C11.1428571,14.1876726 11.5266131,14.5714286 12,14.5714286 C12.4395735,14.5714286 12.8018633,14.240537 12.8513762,13.816488 L12.8571429,13.717085 C12.8571429,13.3255808 12.9730286,12.9428362 13.1901961,12.617085 C13.3563164,12.3679044 13.5405923,12.1314875 13.7414642,11.9097362 L13.9478105,11.692944 L14.4759104,11.1648441 C15.0389676,10.6017869 15.3742695,9.85354919 15.4225227,9.06327763 L15.4285714,8.86491686 L15.4285714,8.57142857 C15.4285714,6.67788085 13.8935477,5.14285714 12,5.14285714 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
QuestionSolid.displayName = 'QuestionSolid';
export default QuestionSolid;
