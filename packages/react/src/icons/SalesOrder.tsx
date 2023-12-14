import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const SalesOrder = ({
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
          id="614.销售订单"
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
              d="M18.1679207,0 C18.6240055,0 18.9937354,0.369729772 18.9937354,0.825814578 L18.9943382,11.4340102 C18.237017,10.9928284 17.3623695,10.7471768 16.4462614,10.7471768 C15.2340494,10.7471768 14.062164,11.1831999 13.146443,11.9749308 C12.3196702,12.6898001 11.74707,13.6525161 11.5130034,14.7114092 C10.6762235,14.7921576 9.90048017,15.1591635 9.30210342,15.7631664 C8.62898804,16.4426458 8.25828662,17.3436854 8.25828662,18.3002645 C8.25828662,19.2469299 8.62272912,20.1409907 9.28445034,20.8177559 C9.54366677,21.0828657 9.83728664,21.3032736 10.1554642,21.4746843 L0.825814578,21.4712242 C0.369729772,21.4712242 0,21.1014943 0,20.6454095 L0,0.825814578 C0,0.369729772 0.369729772,0 0.825814578,0 L18.1679207,0 Z M16.4462844,11.5056579 C18.1727719,11.5056579 19.7260432,12.5320331 20.4034807,14.1204908 C20.4609031,14.2551577 20.5907351,14.3447339 20.7370348,14.3506662 C21.6162492,14.3861977 22.437255,14.754911 23.0487933,15.3888983 C23.6622091,16.024774 24,16.8617925 24,17.7457271 C24,19.5366402 22.6093768,21.0088388 20.8513165,21.1389748 L20.5977759,21.1483256 L11.8378707,21.1483256 C11.8226065,21.1460517 11.8070403,21.1446905 11.7912423,21.14425 C11.0458428,21.1249972 10.3482061,20.8206985 9.82679708,20.2874517 C9.30447486,19.753237 9.01681073,19.0475182 9.01681073,18.3002409 C9.01681073,17.5448991 9.30949951,16.8334601 9.84097305,16.2969717 C10.3720414,15.7609241 11.0799629,15.4612358 11.834396,15.453124 C12.0195648,15.4511334 12.176219,15.3156955 12.2049649,15.1327747 C12.3622911,14.1319072 12.8728366,13.2141956 13.6425582,12.548713 C14.4205023,11.8760864 15.4162293,11.5056579 16.4462844,11.5056579 Z M18.3117174,13.2130783 L16.521732,14.5747852 L14.7317467,13.2130783 L14.2179827,13.9018955 L16.1752827,15.2329802 L16.3183971,15.3401491 L14.0388478,15.3412648 L14.0388478,16.0506604 L16.1661428,16.0501175 L16.1661428,17.4683994 L14.0388478,17.4694513 L14.0388478,18.1788467 L16.1661428,18.1783678 L16.1670343,20.3070332 L16.8389925,20.3070332 L16.8380476,18.1783678 L19.0046163,18.1788467 L19.0046163,17.4694513 L16.8380476,17.4683994 L16.8380476,16.0501175 L19.0046163,16.0506604 L19.0046163,15.3412648 L16.7238569,15.3401491 L16.8681815,15.2329802 L18.8085519,13.747257 L18.3117174,13.2130783 Z M9.49686764,11.5614492 L5.36779476,11.5614492 C5.13975235,11.5614492 4.95488747,11.746314 4.95488747,11.9743564 C4.95488747,12.1698214 5.09070658,12.333564 5.27311891,12.3763585 L5.36779476,12.3872637 L9.49686764,12.3872637 C9.72491005,12.3872637 9.90977493,12.2023988 9.90977493,11.9743564 C9.90977493,11.746314 9.72491005,11.5614492 9.49686764,11.5614492 Z M12.800126,8.25819084 L5.36779476,8.25819084 C5.13975235,8.25819084 4.95488747,8.44305573 4.95488747,8.67109813 C4.95488747,8.86656304 5.09070658,9.0303057 5.27311891,9.07310023 L5.36779476,9.08400542 L12.800126,9.08400542 C13.0281684,9.08400542 13.2130332,8.89914054 13.2130332,8.67109813 C13.2130332,8.44305573 13.0281684,8.25819084 12.800126,8.25819084 Z M12.800126,4.95493253 L5.36779476,4.95493253 C5.13975235,4.95493253 4.95488747,5.13979742 4.95488747,5.36783982 C4.95488747,5.56330473 5.09070658,5.72704739 5.27311891,5.76984192 L5.36779476,5.78074711 L12.800126,5.78074711 C13.0281684,5.78074711 13.2130332,5.59588223 13.2130332,5.36783982 C13.2130332,5.13979742 13.0281684,4.95493253 12.800126,4.95493253 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
SalesOrder.displayName = 'SalesOrder';
export default SalesOrder;
