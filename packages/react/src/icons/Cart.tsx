import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const Cart = ({
  size = '1em',
  fill = 'currentColor',
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
          id="117.购物车"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="购物车"
            transform="translate(4.000000, 5.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M4.60142364,2.53846154 L23.1425763,2.53846154 C23.6834666,2.53846154 24.0891412,3.02696665 23.9830638,3.5505598 L22.2687989,12.0120982 C22.18867,12.407611 21.8368901,12.6923077 21.4283114,12.6923077 L6.41652765,12.6923077 L6.71904499,14.3846154 L18.856914,14.3846154 C19.3302952,14.3846154 19.7140465,14.7634514 19.7140465,15.2307692 C19.7140465,15.6980871 19.3302952,16.0769231 18.856914,16.0769231 L5.99992718,16.0769231 C5.58401133,16.0769231 5.22811731,15.7821593 5.15583724,15.3778183 L2.70941201,1.69230769 L0.857132455,1.69230769 C0.383751283,1.69230769 0,1.3134717 0,0.846153846 C0,0.378835993 0.383751283,0 0.857132455,0 L3.42852982,0 C3.84444568,0 4.20033969,0.294763825 4.27261976,0.699104709 L4.60142364,2.53846154 Z M4.90394099,4.23076923 L6.11401033,11 L20.7256308,11 L22.0970428,4.23076923 L4.90394099,4.23076923 Z M7.71419209,22 C6.29404855,22 5.14279473,20.863492 5.14279473,19.4615385 C5.14279473,18.0595849 6.29404855,16.9230769 7.71419209,16.9230769 C9.13433561,16.9230769 10.2855895,18.0595849 10.2855895,19.4615385 C10.2855895,20.863492 9.13433561,22 7.71419209,22 Z M7.71419209,20.3076923 C8.18757324,20.3076923 8.57132455,19.9288563 8.57132455,19.4615385 C8.57132455,18.9942206 8.18757324,18.6153846 7.71419209,18.6153846 C7.24081095,18.6153846 6.85705964,18.9942206 6.85705964,19.4615385 C6.85705964,19.9288563 7.24081095,20.3076923 7.71419209,20.3076923 Z M17.9997816,22 C16.579638,22 15.4283842,20.863492 15.4283842,19.4615385 C15.4283842,18.0595849 16.579638,16.9230769 17.9997816,16.9230769 C19.4199251,16.9230769 20.5711789,18.0595849 20.5711789,19.4615385 C20.5711789,20.863492 19.4199251,22 17.9997816,22 Z M17.9997816,20.3076923 C18.4731627,20.3076923 18.856914,19.9288563 18.856914,19.4615385 C18.856914,18.9942206 18.4731627,18.6153846 17.9997816,18.6153846 C17.5264004,18.6153846 17.1426491,18.9942206 17.1426491,19.4615385 C17.1426491,19.9288563 17.5264004,20.3076923 17.9997816,20.3076923 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
Cart.displayName = 'Cart';
export default Cart;
