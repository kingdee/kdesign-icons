import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const Like = ({
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
          id="1241-喜欢"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(4.000000, 5.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M17.6997933,-4.80547407e-16 C14.2491076,-4.80547407e-16 12.1495397,2.69922974 12.1495397,2.69922974 C12.1495398,2.69922974 10.3505542,-4.80547407e-16 6.59928611,-4.80547407e-16 C2.84952094,-4.80547407e-16 -2.40273704e-16,2.09956792 -2.40273704e-16,7.19894796 C-2.40273704e-16,14.3993988 12.1495397,22.1995116 12.1495397,22.1995116 C12.1495397,22.1995116 24,13.9485253 24,7.35074205 C24,1.94777381 20.5493143,-4.80547407e-16 17.6997933,-4.80547407e-16 M12.1495397,20.3990231 C12.1495397,20.3990231 1.49990606,13.0497839 1.49990606,7.20045085 C1.49990606,3.45068568 4.05034753,1.34961487 6.8998685,1.34961487 C9.74938946,1.34961487 12.1495397,4.49971819 12.1495397,4.49971819 C12.1495397,4.49971819 15.0005636,1.34961487 17.5495021,1.34961487 C20.0999436,1.34961487 22.6503851,3.30039451 22.6503851,7.34923913 C22.5000939,13.0497839 12.1495397,20.3990231 12.1495397,20.3990231"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
Like.displayName = 'Like';
export default Like;