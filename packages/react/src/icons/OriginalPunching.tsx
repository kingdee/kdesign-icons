import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const OriginalPunching = ({
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
          id="1939原始打卡"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g id="编组-2" transform="translate(2.182373, 5.000000)">
            <g id="zz_pzlx_48_48" fill="#999999" fillRule="nonzero">
              <g id="Group-7-Copy-5">
                <path
                  d="M22.6735457,12.5 C23.3915037,12.5 24.0699131,12.6400216 24.708774,12.9200648 C25.3476349,13.2001081 25.9043565,13.5806016 26.3850233,14.0585014 C26.8626478,14.5364013 27.2429222,15.0934438 27.5228041,15.7326729 C27.802686,16.371902 27.942627,17.0507024 27.942627,17.7690742 C27.942627,18.5026657 27.802686,19.190598 27.5228041,19.8298271 C27.2429222,20.4690562 26.8626478,21.0260987 26.3850233,21.5039986 C25.9073987,21.9818984 25.3476349,22.3623919 24.708774,22.6424352 C24.0699131,22.9224784 23.3915037,23.0625 22.6735457,23.0625 C21.9373346,23.0625 21.2528408,22.9224784 20.6139799,22.6424352 C19.975119,22.3623919 19.4183974,21.9818984 18.9377306,21.5039986 C18.4601061,21.0260987 18.0798317,20.4690562 17.7999498,19.8298271 C17.5200679,19.190598 17.380127,18.5026657 17.380127,17.7690742 C17.380127,17.0507024 17.5200679,16.371902 17.7999498,15.7326729 C18.0798317,15.0934438 18.4601061,14.5364013 18.9377306,14.0585014 C19.4153552,13.5806016 19.975119,13.2001081 20.6139799,12.9200648 C21.2528408,12.6400216 21.9373346,12.5 22.6735457,12.5 Z M26.1767674,0 C26.6254988,0 26.9892674,0.363768641 26.9892674,0.8125 L26.9902576,12.4270839 C26.4942469,12.024722 25.9447541,11.6899595 25.3387423,11.4243156 C24.5033088,11.0581052 23.6161581,10.875 22.67729,10.875 C21.7145524,10.875 20.8194451,11.0581052 19.9840116,11.4243156 C19.1485781,11.7905259 18.4165793,12.2880944 17.7919933,12.9130403 C17.1674073,13.5379863 16.6701255,14.2664265 16.3041261,15.1023415 C15.9381267,15.9382565 15.755127,16.8259186 15.755127,17.7653278 C15.755127,18.7246398 15.9381267,19.6242435 16.3041261,20.4601585 C16.4548705,20.8044472 16.6278852,21.1305042 16.8228924,21.4386076 L0.8125,21.4375 C0.363768641,21.4375 0,21.0737314 0,20.625 L0,0.8125 C0,0.363768641 0.363768641,0 0.8125,0 L26.1767674,0 Z M22.661377,14.7633929 C22.2446766,14.7633929 21.906854,15.1011568 21.9067817,15.5178571 L21.9065198,17.0263929 L21.9065198,17.0263929 L20.3979841,17.0266547 C19.9812838,17.0267271 19.6435198,17.3645497 19.6435198,17.78125 C19.6435198,18.1978699 19.981257,18.5356071 20.3978769,18.5356071 C20.3979127,18.5356071 20.3979484,18.5356071 20.3979841,18.5356071 L21.9065198,18.5353929 L21.9065198,18.5353929 L21.9067817,20.0446429 C21.9068541,20.4613432 22.2446767,20.7991071 22.661377,20.7991071 C23.0779969,20.7991071 23.4157341,20.4613699 23.4157341,20.04475 C23.4157341,20.0447143 23.4157341,20.0446786 23.4157341,20.0446429 L23.4155198,18.5353929 L23.4155198,18.5353929 L24.9247698,18.5356072 C25.3413898,18.5356663 25.6791749,18.1979771 25.6792341,17.7813571 C25.6792341,17.7813214 25.6792341,17.7812857 25.6792341,17.78125 C25.6792341,17.3645497 25.3414701,17.0267271 24.9247698,17.0266548 L23.4155198,17.0263929 L23.4155198,17.0263929 L23.4157341,15.5178571 C23.4157933,15.1012372 23.078104,14.763452 22.6614841,14.7633929 C22.6614484,14.7633929 22.6614127,14.7633929 22.661377,14.7633929 Z M12.505127,12.5 L4.38012695,12.5 C3.93139559,12.5 3.56762695,12.8637686 3.56762695,13.3125 C3.56762695,13.7612314 3.93139559,14.125 4.38012695,14.125 L12.505127,14.125 C12.9538583,14.125 13.317627,13.7612314 13.317627,13.3125 C13.317627,12.8637686 12.9538583,12.5 12.505127,12.5 Z M16.567627,5.4375 L4.38012695,5.4375 C3.93139559,5.4375 3.56762695,5.80126864 3.56762695,6.25 C3.56762695,6.69873136 3.93139559,7.0625 4.38012695,7.0625 L16.567627,7.0625 C17.0163583,7.0625 17.380127,6.69873136 17.380127,6.25 C17.380127,5.80126864 17.0163583,5.4375 16.567627,5.4375 Z"
                  id="形状"
                  fill={fill}
                ></path>
              </g>
            </g>
            <g id="编组-40备份" transform="translate(17.380127, 8.500000)"></g>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
OriginalPunching.displayName = 'OriginalPunching';
export default OriginalPunching;
