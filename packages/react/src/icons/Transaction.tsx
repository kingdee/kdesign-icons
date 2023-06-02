import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const Transaction = ({
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
          id="263.交易管理"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="交易管理"
            transform="translate(4.000000, 5.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M22.397203,10.5041167 C22.41457,10.5150752 22.4293348,10.5295703 22.4404974,10.5466199 L23.9771085,12.8936202 C24.0201275,12.9593269 24.0007439,13.0468291 23.933814,13.0890619 C23.9105794,13.1037231 23.8835414,13.1115179 23.8559212,13.1115179 L22.9625642,13.111221 L22.9328203,13.2662995 C22.7862345,13.9573355 22.5716106,14.6329175 22.2918387,15.2834035 C20.6208905,19.1710179 16.8425904,21.7746718 12.5651735,21.9861186 C8.28775668,22.1975655 4.26422038,19.9795822 2.20718466,16.2762543 C2.04656409,15.9868968 2.15429072,15.6239587 2.44779877,15.4656095 C2.74130685,15.3072603 3.10945085,15.4134635 3.27007141,15.7028211 C5.01673846,18.8502012 8.36561077,20.8078071 12.0047129,20.8087148 C14.6453598,20.8157759 17.1792015,19.7814162 19.0418044,17.9360479 C20.3904327,16.6146512 21.3217506,14.939056 21.7270475,13.1120155 L20.7826991,13.1115179 C20.7031362,13.1115179 20.6386378,13.0481982 20.6386378,12.9700894 C20.6386378,12.942974 20.6465778,12.9164302 20.6615118,12.8936202 L22.1981229,10.5466199 C22.2411419,10.4809131 22.3302731,10.4618838 22.397203,10.5041167 Z M12.0051933,3.1154164 C16.5792767,3.1154164 20.2873037,6.65516245 20.2873037,11.0216605 C20.2873037,15.3881585 16.5792767,18.9279046 12.0051933,18.9279046 C7.43111013,18.9279046 3.72308301,15.3881585 3.72308301,11.0216605 C3.72308301,6.65516245 7.43111013,3.1154164 12.0051933,3.1154164 Z M13.7283636,6.72627344 L13.6841112,6.79466407 L12.2285411,9.42168404 C12.1827752,9.50348626 12.1564445,9.59438061 12.145485,9.68757307 C12.1420823,9.62717135 12.1302245,9.56636488 12.1090867,9.50771684 L12.0703169,9.42168404 L10.6370188,6.79466407 C10.4792586,6.50555532 10.128474,6.40584695 9.85378564,6.57339344 C9.60406898,6.72570846 9.50390615,7.04584088 9.60698335,7.3206838 L9.64405742,7.40156489 L10.8917552,9.68757307 L9.55682529,9.68757307 C9.20735622,9.70053146 8.93086207,9.9822807 8.93086207,10.3254335 C8.93086207,10.6399902 9.1631939,10.902951 9.47109604,10.9545746 L9.55682529,10.963294 L11.508412,10.963294 L11.508412,12.2394702 L9.55682529,12.2394702 C9.20735622,12.2524286 8.93086207,12.5341779 8.93086207,12.8773307 C8.93086207,13.1918874 9.1631939,13.4548481 9.47109604,13.5064717 L9.55682529,13.5151912 L11.508412,13.5151912 L11.508412,14.8551079 C11.508412,15.1719894 11.7993405,15.4292278 12.159405,15.4292278 C12.4886135,15.4292278 12.7608981,15.2126935 12.8039927,14.9328757 L12.8099339,14.8551079 L12.8099339,13.5151912 L14.7615208,13.5151912 C15.1109898,13.5022328 15.3874839,13.2204835 15.3874839,12.8773307 C15.3874839,12.5627739 15.1551521,12.2998132 14.8472499,12.2481896 L14.7615208,12.2394702 L12.8099339,12.2394702 L12.8099339,10.963294 L14.7615208,10.963294 C15.1211213,10.963294 15.4125136,10.676917 15.4125136,10.3254335 C15.4125136,10.000567 15.1642266,9.73195161 14.8431931,9.69254846 L14.7615208,9.68757307 L13.4265908,9.68757307 L14.6928486,7.40156489 C14.8538568,7.11200081 14.7582727,6.74093996 14.4803363,6.57339344 C14.2242853,6.41939177 13.9042924,6.49034104 13.7283636,6.72627344 Z M12.0047129,1.65142798e-05 C16.0858877,0.0014427953 19.8415361,2.19671193 21.8008464,5.72618248 C21.9047497,5.91336399 21.8994677,6.14097474 21.7869902,6.32327596 C21.6745127,6.50557717 21.4719276,6.61487294 21.2555468,6.60999259 C21.039166,6.60511226 20.8418629,6.48679728 20.7379596,6.29961574 C18.9915326,3.15266783 15.6433151,1.1951321 12.0047129,1.19372199 C9.36386467,1.18702477 6.82999434,2.22189122 4.96762151,4.06776401 C3.59577374,5.41190731 2.65565527,7.12251047 2.26168218,8.9862367 L3.21728337,8.98652097 C3.24490357,8.98652097 3.27194155,8.99431588 3.29517621,9.00897699 C3.3487201,9.04276323 3.37183437,9.10552195 3.35691259,9.16291583 L3.33847065,9.20441879 L1.80185959,11.5514191 C1.79069701,11.5684686 1.7759321,11.5829637 1.75856515,11.5939223 C1.70502123,11.6277085 1.63726849,11.622287 1.59028342,11.5851251 L1.55948504,11.5514191 L0.0228739825,9.20441879 C0.00793996505,9.18160875 0,9.1550649 0,9.12794943 C0,9.06546242 0.0412789927,9.01244042 0.0985267597,8.99373108 L0.144061258,8.98652097 L1.02683663,8.98622406 L1.06740953,8.78106242 C1.50585363,6.67616665 2.56280171,4.74221997 4.10977982,3.22205306 C6.20132245,1.15461115 9.04289947,-0.00504727526 12.0047129,1.65142798e-05 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
Transaction.displayName = 'Transaction';
export default Transaction;