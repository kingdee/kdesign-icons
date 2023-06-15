import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const PageSet = ({
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
          id="77.页面设置"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="页面设置"
            transform="translate(4.000000, 4.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M20.0315573,12.9759993 L22.4297798,14.3597279 C22.59897,14.4573474 22.6715859,14.6638411 22.6007382,14.8458728 L22.2875175,15.6506438 C22.4945031,15.9319432 22.6700403,16.2353261 22.8105385,16.5554805 L23.6645051,16.6867759 C23.8575104,16.7164501 24,16.8825126 24,17.0777859 L24,19.8452432 C24,20.0405165 23.8575104,20.2065791 23.6645051,20.2362532 L22.8105385,20.3675486 C22.6700404,20.6877029 22.4945032,20.9910856 22.287518,21.2723844 L22.6007384,22.0771566 C22.6715858,22.2591883 22.5989699,22.4656816 22.4297798,22.5633011 L20.0315573,23.9470298 C19.8625077,24.0445681 19.6475846,24.0042457 19.5253855,23.8520654 L18.9858141,23.1801113 C18.8125564,23.1991638 18.6376137,23.2087671 18.4615385,23.2087671 C18.2854556,23.2087671 18.110513,23.1991638 17.9372551,23.1801113 L17.3976838,23.8520654 C17.2754848,24.0042457 17.0605615,24.0445681 16.8915121,23.9470298 L14.4932896,22.5633011 C14.3240993,22.4656816 14.2514835,22.259188 14.3223311,22.0771563 L14.6355519,21.2723852 C14.4285663,20.9910859 14.2530291,20.687703 14.1125308,20.3675486 L13.2585643,20.2362532 C13.0655589,20.2065791 12.9230769,20.0405165 12.9230769,19.8452432 L12.9230769,17.0777859 C12.9230769,16.8825126 13.0655589,16.7164501 13.2585643,16.6867759 L14.1125308,16.5554805 C14.253029,16.2353263 14.4285661,15.9319435 14.6355512,15.6506447 L14.3223309,14.8458725 C14.2514836,14.6638408 14.3240994,14.4573474 14.4932896,14.3597279 L16.8915121,12.9759993 C17.0605615,12.878461 17.2754848,12.9187833 17.3976838,13.0709638 L17.9372551,13.7429178 C18.110513,13.7238653 18.2854556,13.7142619 18.4615385,13.7142619 C18.6376137,13.7142619 18.8125564,13.7238653 18.9858141,13.7429178 L19.5253855,13.0709638 C19.6475846,12.9187833 19.8625077,12.878461 20.0315573,12.9759993 Z M21.2307692,0 C21.7405705,0 22.1538462,0.413275898 22.1538462,0.923077524 L22.1538462,12.0692386 L20.9541907,11.3769261 C20.7481255,11.2580305 20.5300317,11.1752837 20.3077268,11.1272189 L20.3076923,8.30769772 L1.84615385,8.30769772 L1.84615385,20.3077055 L11.1250737,20.3087014 C11.2739555,21.0151741 11.7566709,21.6066093 12.4129819,21.8962499 L12.4698462,21.9184758 L12.4591287,22.0068543 L12.4504615,22.1538606 L0.923076923,22.1538606 C0.413275628,22.1538606 0,21.7405847 0,21.2307831 L0,0.923077524 C0,0.413275898 0.413275628,0 0.923076923,0 L21.2307692,0 Z M18.4615385,15.6923179 C16.9321346,15.6923179 15.6923077,16.9321456 15.6923077,18.4615505 C15.6923077,19.9909554 16.9321346,21.2307831 18.4615385,21.2307831 C19.9909423,21.2307831 21.2307692,19.9909554 21.2307692,18.4615505 C21.2307692,16.9321456 19.9909423,15.6923179 18.4615385,15.6923179 Z M20.3076923,1.84615505 L1.84615385,1.84615505 L1.84615385,6.46154267 L20.3076923,6.46154267 L20.3076923,1.84615505 Z M4.61538462,2.76923257 C5.38008659,2.76923257 6,3.38914642 6,4.15384886 C6,4.91855133 5.38008659,5.53846515 4.61538462,5.53846515 C3.85068267,5.53846515 3.23076923,4.91855133 3.23076923,4.15384886 C3.23076923,3.38914642 3.85068267,2.76923257 4.61538462,2.76923257 Z M9.23076923,2.76923257 C9.99547117,2.76923257 10.6153846,3.38914642 10.6153846,4.15384886 C10.6153846,4.91855133 9.99547117,5.53846515 9.23076923,5.53846515 C8.46606729,5.53846515 7.84615385,4.91855133 7.84615385,4.15384886 C7.84615385,3.38914642 8.46606729,2.76923257 9.23076923,2.76923257 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
PageSet.displayName = 'PageSet';
export default PageSet;
