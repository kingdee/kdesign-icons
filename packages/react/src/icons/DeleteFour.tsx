import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const DeleteFour = ({
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
          id="1417-删除"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(4.000000, 4.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M14.6662883,5.71078067e-16 C14.9745885,5.71078067e-16 15.2579415,0.169440714 15.4038303,0.441038644 L15.4038303,0.441038644 L16.9635348,3.34716278 L20.372093,3.3488372 C20.3778014,3.3488372 20.3834964,3.34889434 20.3891776,3.34900807 L23.1627907,3.3488372 C23.6251685,3.3488372 24,3.72366858 24,4.1860465 C24,4.5970491 23.7038369,4.93887911 23.3132801,5.00976725 L23.1627907,5.0232558 L21.2081859,5.0232558 L21.2093023,23.1627907 C21.2093023,23.5737933 20.9131391,23.9156232 20.5225823,23.9865114 L20.372093,24 L3.62790697,24 C3.16552906,24 2.79069768,23.6251685 2.79069768,23.1627907 L2.79069768,23.1627907 L2.78958139,5.0232558 L0.8372093,5.0232558 C0.374831383,5.0232558 5.71078067e-16,4.64842444 5.71078067e-16,4.1860465 C5.71078067e-16,3.7750439 0.296163071,3.43321389 0.68671987,3.36232578 L0.8372093,3.3488372 L3.6100465,3.3488372 L3.62790697,3.3488372 L7.03758137,3.34716278 L8.63646092,0.434776185 C8.75893336,0.211354278 8.97478387,0.0583743046 9.22026803,0.0135871702 L9.37060464,5.71078067e-16 L14.6662883,5.71078067e-16 Z M19.5337673,5.0232558 L4.46399999,5.0232558 L4.46511627,22.3244651 L19.5348837,22.3244651 L19.5337673,5.0232558 Z M9.76744185,8.93023255 C10.1784445,8.93023255 10.5202745,9.22639559 10.5911626,9.61695239 L10.6046511,9.76744185 L10.6046511,17.0232558 C10.6046511,17.4856337 10.2298198,17.8604651 9.76744185,17.8604651 C9.35643925,17.8604651 9.01460924,17.5643019 8.9437211,17.1737451 L8.93023255,17.0232558 L8.93023255,9.76744185 C8.93023255,9.30506391 9.30506391,8.93023255 9.76744185,8.93023255 Z M14.2325581,8.93023255 C14.6435607,8.93023255 14.9853907,9.22639559 15.0562788,9.61695239 L15.0697674,9.76744185 L15.0697674,17.0232558 C15.0697674,17.4856337 14.694936,17.8604651 14.2325581,17.8604651 C13.8215555,17.8604651 13.4797255,17.5643019 13.4088374,17.1737451 L13.3953488,17.0232558 L13.3953488,9.76744185 C13.3953488,9.30506391 13.7701802,8.93023255 14.2325581,8.93023255 Z M14.1650232,1.67386047 L9.86511626,1.67386047 L8.94753487,3.34827907 L15.064186,3.34827907 L14.1650232,1.67386047 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
DeleteFour.displayName = 'DeleteFour';
export default DeleteFour;
