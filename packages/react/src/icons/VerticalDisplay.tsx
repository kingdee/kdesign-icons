import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const VerticalDisplay = ({
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
          id="1144-纵向显示"
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
              d="M22.4323662,0.000624945525 C22.8367603,-0.0109506445 23.2291745,0.138676456 23.5231987,0.416558236 C23.8172229,0.694439986 23.9887465,1.07778938 24,1.48219253 L24,1.48219253 L24,21.3880672 C23.9887465,21.7924704 23.8172229,22.1758198 23.5231987,22.4537016 C23.2291745,22.7315833 22.8367603,22.8812104 22.4323662,22.8696348 L22.4323662,22.8696348 L18.467175,22.8696348 C17.6369154,22.8766606 16.9536851,22.2180267 16.9302792,21.3880672 L16.9302792,21.3880672 L16.9302792,6.33878333 L16.9118364,3.92893067 L16.9118364,1.48219253 C16.8770013,1.12491818 16.9954256,0.769645096 17.2376583,0.504726766 C17.5392389,0.173271286 17.9700154,-0.0107062645 18.4179944,0.000624945525 L18.4179944,0.000624945525 L22.4323662,0.000624945525 Z M13.1544805,15.7723324 C13.5588837,15.7835859 13.942233,15.9551095 14.2201148,16.2491338 C14.4979965,16.5431581 14.6476236,16.9355722 14.6360481,17.3399662 L14.6360481,17.3399662 L14.6360481,21.3051574 C14.643074,22.1354172 13.98444,22.8186474 13.1544805,22.8420532 L13.1544805,22.8420532 L6.33878334,22.8420532 L3.92893068,22.860496 L1.48219254,22.860496 C1.12491819,22.8953313 0.76964511,22.7769069 0.50472678,22.5346741 C0.17327127,22.2330937 -0.01070625,21.802317 0.00062496,21.3543381 L0.00062496,21.3543381 L0.00062496,17.3399662 C-0.01095063,16.9355722 0.13867647,16.5431581 0.41655825,16.2491338 C0.69444,15.9551095 1.07778939,15.7835859 1.48219254,15.7723324 L1.48219254,15.7723324 L13.1544805,15.7723324 Z M21.5102288,2.40433001 L19.2602133,2.40433001 L19.2602133,20.5397007 L21.5102288,20.5397007 L21.5102288,2.40433001 Z M12.2951666,18.2621037 L2.40433002,18.2621037 L2.40433002,20.5121193 L12.2951666,20.5121193 L12.2951666,18.2621037 Z M8.59150113,1.58087957 C9.18319617,1.31607989 9.90011907,1.40836478 10.4065948,1.82323895 L10.4065948,1.82323895 L13.9289709,5.35030046 L14.0577552,5.46680036 C14.2999233,5.71715813 14.4468203,6.0670886 14.4468203,6.43424174 C14.4468203,6.86258708 14.246877,7.26749045 13.9029233,7.54147043 L13.9029233,7.54147043 L10.4291755,11.0183408 L10.24866,11.148761 C9.75147582,11.4634716 9.13617687,11.5130091 8.60341494,11.2839221 L8.60341494,11.2839221 L8.44028247,11.2085217 L8.28948264,11.1160925 C7.90480437,10.8482223 7.66380771,10.4144661 7.6635618,9.94086632 L7.6635618,9.94086632 L7.66449903,8.91777713 L7.4290902,8.96058347 L7.13005995,9.03227042 C5.03484549,9.59635028 2.92101408,11.4484714 2.26513251,13.3502791 L2.26513251,13.3502791 L2.18151261,13.6221702 L2.13472323,13.7566774 C2.00281029,14.0588928 1.71657681,14.2759566 1.37773767,14.329993 L1.37773767,14.329993 L1.22203503,14.3409165 L1.05814428,14.3332693 L0.90659007,14.2992759 C0.56485851,14.1980568 0.31027989,13.9471354 0.22451592,13.6221876 C0.07650333,13.0709374 0.00098019,12.5033931 0,11.9335513 L0,11.9335513 L0.01149534,11.6244411 L0.04023339,11.3067322 C0.44901186,7.81631807 3.88770984,4.49787227 7.59958665,4.05673313 L7.59958665,4.05673313 L7.64298249,4.05196493 L7.64281806,2.92781135 L7.65401469,2.75228126 C7.7203755,2.23275425 8.07679431,1.78334591 8.59150113,1.58087957 Z M9.64094706,3.83065196 L9.64083435,4.97874725 L9.62800764,5.13137177 C9.59406135,5.33179367 9.49385844,5.51756975 9.34083261,5.66067095 C9.15372372,5.83572242 8.90256768,5.93304794 8.64183702,5.93305706 L8.64183702,5.93305706 L8.3517837,5.93916248 C6.31206183,6.04350485 4.09504503,7.42692245 2.89955793,9.16833986 L2.89955793,9.16833986 L2.83710924,9.2635787 L2.99106456,9.14060657 C4.65231573,7.84420403 6.85277271,6.92296451 8.64396894,6.93545117 L8.64396894,6.93545117 L8.79996552,6.94704152 C9.25829823,7.01609792 9.62059476,7.38607805 9.64053309,7.85059379 L9.64053309,7.85059379 L9.64094706,9.05609774 L12.2352272,6.43415348 L9.64094706,3.83065196 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
VerticalDisplay.displayName = 'VerticalDisplay';
export default VerticalDisplay;
