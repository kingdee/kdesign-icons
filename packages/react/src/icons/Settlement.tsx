import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const Settlement = ({
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
          id="487.结息设置"
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
              d="M14.8514719,0 C14.8514719,2.25502456 16.7261374,4.08396606 19.0396967,4.08396606 C19.767875,4.08565561 20.4843028,3.90019587 21.1204282,3.54533275 L21.1204282,3.54533275 L24,8.45466728 C22.7395183,9.15944615 21.8911686,10.4832514 21.8911686,12 C21.8911686,13.5167486 22.7395183,14.8405538 24,15.5453327 L24,15.5453327 L21.1204282,20.4546673 C20.4843028,20.0998041 19.767875,19.9143444 19.0396967,19.9160339 C16.7261374,19.9160339 14.8514719,21.7436356 14.8514719,24 L14.8514719,24 L9.14852813,24 C9.14852813,21.7436356 7.27386265,19.9160339 4.9603033,19.9160339 C4.23210994,19.9142246 3.51565234,20.099692 2.87957181,20.4546673 L2.87957181,20.4546673 L0,15.5453327 C1.26048173,14.8405538 2.1088314,13.5167486 2.1088314,12 C2.1088314,10.4832514 1.26048173,9.15944615 0,8.45466728 L0,8.45466728 L2.87957181,3.54533275 C3.51565234,3.90030797 4.23210994,4.08577541 4.9603033,4.08396606 C7.27386265,4.08396606 9.14852813,2.25502456 9.14852813,0 L9.14852813,0 L14.8514719,0 Z M9.55680222,7.05688517 C9.39242065,6.8557561 9.11360281,6.80382695 8.89140798,6.91335933 L8.89140798,6.91335933 L8.82942857,6.94971429 L8.78449843,6.98986689 C8.61009019,7.16718001 8.59537363,7.44316671 8.75861922,7.64357272 L8.75861922,7.64357272 L11.8491429,11.4368571 L8.97468069,11.4373368 L8.90219564,11.44396 C8.73759368,11.4743698 8.6078016,11.6059764 8.57792555,11.7654552 L8.57792555,11.7654552 L8.57142857,11.835296 L8.57777675,11.9068296 C8.61117693,12.092477 8.77269899,12.2332551 8.97468069,12.2332551 L8.97468069,12.2332551 L11.778,12.2331429 L11.778,13.8248571 L8.99554689,13.8250919 L8.91931107,13.8322246 C8.74619185,13.8649737 8.60968372,14.0067038 8.57826171,14.1784502 L8.57826171,14.1784502 L8.57142857,14.2536633 L8.57828083,14.3306996 C8.61428761,14.5306274 8.78785621,14.6822348 8.99554689,14.6822348 L8.99554689,14.6822348 L11.778,14.682 L11.7780186,17.3770171 L11.7848308,17.4538907 C11.8161729,17.6284583 11.9525042,17.7661085 12.127912,17.7977935 L12.127912,17.7977935 L12.1525714,17.8002857 L12.1770061,17.7980495 C12.3763262,17.7631184 12.5274725,17.5938804 12.5274725,17.3770171 L12.5274725,17.3770171 L12.5271429,14.682 L15.2681894,14.6822348 L15.3444252,14.675102 C15.5422757,14.6376746 15.6923077,14.4579044 15.6923077,14.2536633 L15.6923077,14.2536633 L15.6854554,14.176627 C15.6494487,13.9766991 15.4758801,13.8250919 15.2681894,13.8250919 L15.2681894,13.8250919 L12.5271429,13.8248571 L12.5271429,12.2331429 L15.2890556,12.2332551 L15.3615406,12.2266319 C15.5496572,12.1918779 15.6923077,12.0249484 15.6923077,11.835296 L15.6923077,11.835296 L15.6859595,11.7637623 C15.6525593,11.578115 15.4910373,11.4373368 15.2890556,11.4373368 L15.2890556,11.4373368 L12.5211429,11.4368571 L15.3001213,7.65894402 C15.457555,7.44485494 15.429213,7.16622188 15.2535442,6.98954416 L15.2535442,6.98954416 L15.2082857,6.95057143 L15.154769,6.91751899 C14.9315666,6.80358399 14.6572322,6.86481224 14.5075323,7.07088798 L14.5075323,7.07088798 L12.1832504,10.2704761 L9.55680222,7.05688517 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
Settlement.displayName = 'Settlement';
export default Settlement;
