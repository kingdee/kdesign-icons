import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const StageOfProject = ({
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
          id="729.项目阶段"
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
              d="M8.42332706,0.0118577529 C8.42332703,0.0118577529 9.20612848,-0.175801102 9.80700872,0.941958826 C10.4686062,1.93478281 10.8295824,2.55480486 10.8295824,2.55480486 C10.8295825,2.55480486 11.130072,2.80233096 11.612351,2.80233096 L11.612351,2.80233096 L20.1028051,2.80175229 C20.2274611,2.79491333 21.5986782,2.75603128 21.5986782,4.35527576 L21.5986782,4.35527576 L21.5986782,10.6275606 C20.5567741,9.97956206 19.327052,9.60528708 18.0099132,9.60528708 C14.2523086,9.60528708 11.2061683,12.6514274 11.2061683,16.4090321 C11.2061683,17.7282269 11.5816127,18.959732 12.2314785,20.0025243 L1.4978876,20.0026618 C1.38693296,20.0177634 0,20.1672157 0,18.2013017 L0,18.2013017 L0.00122694223,1.77385387 C0.0141098356,1.51281742 0.162263176,0.0118577529 1.86602657,0.0118577529 L1.86602657,0.0118577529 L8.42332706,0.0118577529 Z M9.60450362,14.4708365 L8.00362244,14.4708365 C7.56155132,14.4708365 7.20318185,14.8292059 7.20318185,15.2712771 C7.20318185,15.7133482 7.56155132,16.0717177 8.00362244,16.0717177 L8.00362244,16.0717177 L9.60450362,16.0717177 C10.0465747,16.0717177 10.4049442,15.7133482 10.4049442,15.2712771 C10.4049442,14.8292059 10.0465747,14.4708365 9.60450362,14.4708365 L9.60450362,14.4708365 Z M4.78942584,14.4498947 C4.34735472,14.4498947 3.98898525,14.8082641 3.98898525,15.2503353 C3.98898525,15.6924064 4.34735472,16.0507759 4.78942584,16.0507759 C5.23149699,16.0507759 5.58986643,15.6924064 5.58986643,15.2503353 C5.58986643,14.8082641 5.23149699,14.4498947 4.78942584,14.4498947 Z M10.4049442,10.4686335 L8.00362244,10.4686335 C7.56155132,10.4686335 7.20318185,10.827003 7.20318185,11.2690741 C7.20318185,11.7111453 7.56155132,12.0695147 8.00362244,12.0695147 L8.00362244,12.0695147 L10.4049442,12.0695147 C10.8470154,12.0695147 11.2053848,11.7111453 11.2053848,11.2690741 C11.2053848,10.827003 10.8470154,10.4686335 10.4049442,10.4686335 L10.4049442,10.4686335 Z M4.78942584,10.4476917 C4.34735472,10.4476917 3.98898525,10.8060612 3.98898525,11.2481323 C3.98898525,11.6902035 4.34735472,12.0485729 4.78942584,12.0485729 C5.23149699,12.0485729 5.58986643,11.6902035 5.58986643,11.2481323 C5.58986643,10.8060612 5.23149699,10.4476917 4.78942584,10.4476917 Z M17.6089095,6.4664306 L8.00362244,6.4664306 C7.56155132,6.4664306 7.20318185,6.82480006 7.20318185,7.26687119 C7.20318185,7.70894231 7.56155132,8.06731178 8.00362244,8.06731178 L8.00362244,8.06731178 L17.6089095,8.06731178 C18.0509806,8.06731178 18.4093501,7.70894231 18.4093501,7.26687119 C18.4093501,6.82480006 18.0509806,6.4664306 17.6089095,6.4664306 L17.6089095,6.4664306 Z M4.78942581,6.44548878 C4.32643878,6.44548878 3.98898525,6.82543352 3.98898525,7.24588328 C3.98898525,7.70884367 4.32643878,8.04636996 4.78942581,8.04636996 C5.25232069,8.04636996 5.58986643,7.66822339 5.58986643,7.24588328 C5.58986643,6.82354315 5.25232069,6.44548878 4.78942581,6.44548878 Z M17.9966956,10.4476917 C21.3122291,10.4476917 24,13.1354627 24,16.4509962 C24,19.7665296 21.3122291,22.4543006 17.9966956,22.4543006 C14.6811621,22.4543006 11.9933912,19.7665296 11.9933912,16.4509962 C11.9933912,13.1354627 14.6811621,10.4476917 17.9966956,10.4476917 Z M17.5749245,12.8490135 L16.8175854,12.8490135 L16.8175854,17.6453057 L16.8198968,17.6441542 L16.8203075,17.6480276 L21.6165997,17.6480276 L21.6165997,16.8484944 L17.5739134,16.8475077 L17.5749245,12.8490135 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
StageOfProject.displayName = 'StageOfProject';
export default StageOfProject;
