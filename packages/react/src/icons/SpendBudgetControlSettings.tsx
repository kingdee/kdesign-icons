import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const SpendBudgetControlSettings = ({
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
          id="457.支出预算控制设置"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(4.000000, 3.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M4.57962472,15.2841322 L6.42069696,18.6531088 C6.72129847,19.2031794 7.29816457,19.5453186 7.92501297,19.5453186 L16.1300514,19.5453186 C16.7759418,19.5453186 17.3670083,19.182287 17.6590676,18.6062006 L19.3432617,15.2841322 L23.1428571,15.2841322 C23.6162441,15.2841322 24,15.6678881 24,16.1412751 L24,24.9225135 C24,25.8692873 23.2324881,26.6367992 22.2857143,26.6367992 L1.71428571,26.6367992 C0.767511863,26.6367992 0,25.8692873 0,24.9225135 L0,16.1412751 C0,15.6678881 0.383755947,15.2841322 0.857142857,15.2841322 L4.57962472,15.2841322 Z M12.0901151,0.025018747 L21.6940939,5.87449255 C21.9366736,6.02224008 22.0135504,6.33866285 21.8658028,6.58124259 C21.7724658,6.73448831 21.6060059,6.82800779 21.4265733,6.82800779 L18.8564411,6.82761907 L18.8571429,13.8643847 L16.9120868,17.4379358 C16.6119174,17.9894215 16.0342714,18.3326813 15.4063878,18.3326813 L8.74016305,18.3326813 C8.13122542,18.3326813 7.56799134,18.0096518 7.26049743,17.4840545 L5.14285714,13.8643847 L5.14215528,6.82761907 L2.77453623,6.82800779 C2.49050408,6.82800779 2.26025051,6.59775423 2.26025051,6.31372208 C2.26025051,6.13600212 2.35200664,5.97087676 2.50291813,5.8770146 L11.9104023,0.0258594328 C11.9653472,-0.00831461676 12.0348528,-0.00863976724 12.0901151,0.025018747 Z M13.9647491,7.2685176 L11.9455782,9.60194928 L9.91246857,7.26743005 C9.71611468,7.04196656 9.38304542,6.99699738 9.13393018,7.16231612 C8.92345954,7.30198941 8.86606696,7.58583719 9.00574028,7.79630783 C9.01693742,7.81318061 9.02924276,7.82929117 9.04257515,7.84453308 L10.7482993,9.79456566 L8.80662001,9.79456566 C8.54067227,9.79456566 8.32507904,10.0101588 8.32507904,10.2761065 C8.32507904,10.5420542 8.54067227,10.7576474 8.80662001,10.7576474 L11.4013606,10.7576474 L11.4013606,11.7207293 L8.80662001,11.7207293 C8.54067227,11.7207293 8.32507904,11.9363225 8.32507904,12.2022702 C8.32507904,12.4682179 8.54067227,12.6838112 8.80662001,12.6838112 L11.4013606,12.6838112 L11.4013606,14.7399145 C11.4013606,15.0404776 11.6450151,15.2841322 11.9455782,15.2841322 C12.2461413,15.2841322 12.4897959,15.0404776 12.4897959,14.7399145 L12.4897959,12.6838112 L14.9470305,12.6838112 C15.2129782,12.6838112 15.4285714,12.4682179 15.4285714,12.2022702 C15.4285714,11.9363225 15.2129782,11.7207293 14.9470305,11.7207293 L12.4897959,11.7207293 L12.4897959,10.7576474 L14.9470305,10.7576474 C15.2129782,10.7576474 15.4285714,10.5420542 15.4285714,10.2761065 C15.4285714,10.0101588 15.2129782,9.79456566 14.9470305,9.79456566 L13.1428571,9.79456566 L14.8348412,7.84579802 C15.0010635,7.65434897 14.9806132,7.36439914 14.7891643,7.19817684 C14.7742426,7.18522135 14.7585,7.17324287 14.7420347,7.16231612 C14.4931178,6.99712901 14.1602305,7.04261183 13.9647491,7.2685176 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
SpendBudgetControlSettings.displayName = 'SpendBudgetControlSettings';
export default SpendBudgetControlSettings;