import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const Shop = ({
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
          id="22.店铺"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="店铺"
            transform="translate(4.000000, 4.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M15.6923077,13.6098462 L15.8414055,13.7121227 L16.0831571,13.8632554 C17.0632591,14.4462618 18.1976749,14.7692308 19.3846154,14.7692308 C20.3764051,14.7692308 21.3160054,14.5457814 22.1558197,14.1464794 L22.1538462,23.0769231 C22.1538462,23.55031 21.7975014,23.9404682 21.3384195,23.9937898 L21.2307692,24 L2.76923077,24 C2.29584384,24 1.90568569,23.6436552 1.85236407,23.1845733 L1.84615385,23.0769231 L1.84510931,14.1469211 C2.59140105,14.5016101 3.41646404,14.7174424 4.28690667,14.7610262 L4.61538462,14.7692308 L4.87171339,14.7641998 L5.16837864,14.7457432 C6.15260473,14.6618618 7.08821807,14.3556426 7.91426106,13.8647447 L8.15872589,13.7119727 L8.30769231,13.6098462 L8.45679008,13.7121227 L8.69854172,13.8632554 C9.59696853,14.3976779 10.6250619,14.7135968 11.704418,14.7625387 L12,14.7692308 L12.2563288,14.7641998 L12.5529941,14.7457432 C13.5372201,14.6618618 14.4728335,14.3556426 15.2988764,13.8647447 L15.5433413,13.7119727 L15.6923077,13.6098462 Z M19.0283069,0 C20.1826456,0 21.215903,0.716047842 21.6014236,1.7483429 L22.0369195,2.74354256 L22.4275674,3.65435207 C23.4917485,6.16558795 24,7.64515173 24,8.30769231 C24,8.54603263 23.981934,8.78015335 23.9470966,9.00875981 L23.9075061,9.2316036 C23.8788958,9.37241445 23.8438748,9.5108964 23.8027609,9.64673159 L23.7363881,9.84894572 L23.7363881,9.84894572 L23.6617926,10.0451581 L23.5801457,10.2337301 L23.5801457,10.2337301 L23.5350636,10.3288835 C23.4736026,10.4548382 23.4067109,10.5773587 23.3345931,10.6963594 C23.2866733,10.7754448 23.2362508,10.8532573 23.1835975,10.9294095 L23.0650653,11.093087 L23.0650653,11.093087 L22.9396002,11.2513283 L22.7854977,11.4279517 L22.6425624,11.5768752 C22.4926525,11.7262344 22.3330156,11.8649846 22.1643539,11.992422 C21.3910468,12.5766637 20.4282857,12.9230769 19.3846154,12.9230769 C17.8747102,12.9230769 16.5341493,12.1980282 15.6921044,11.0771024 C14.8504661,12.1980282 13.5099052,12.9230769 12,12.9230769 C10.4900948,12.9230769 9.14953394,12.1980282 8.30748905,11.0771024 C7.46585067,12.1980282 6.12528978,12.9230769 4.61538462,12.9230769 C3.64936033,12.9230769 2.75265426,12.6262905 2.01147237,12.1189239 L1.84597446,12.0002033 C1.72142716,11.9066428 1.60176724,11.8069277 1.48744621,11.7015096 L1.32002531,11.5391618 L1.21338219,11.4267311 L1.08849414,11.2848959 L0.960862464,11.126967 L0.960862464,11.126967 L0.900619244,11.0472282 L0.754678036,10.837821 L0.754678036,10.837821 L0.664677061,10.6951547 L0.563614021,10.5196955 L0.466868263,10.3328382 L0.466868263,10.3328382 L0.427343823,10.2499349 L0.344203894,10.059829 L0.344203894,10.059829 L0.289326041,9.91969533 L0.227569359,9.74309216 C0.191302715,9.63217976 0.159101982,9.51930896 0.131168492,9.40472761 L0.0924938732,9.2316036 L0.0529322732,9.00894915 C0.0180760025,8.78028258 0,8.54609835 0,8.30769231 C0,7.67039852 0.469930191,6.27784329 1.44268316,3.96249742 L1.814653,3.08881885 L2.37878161,1.79688895 C2.76276462,0.772934223 3.71032991,0.0763839803 4.79050926,0.00589933292 L4.97169316,0 L19.0283069,0 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
Shop.displayName = 'Shop';
export default Shop;
