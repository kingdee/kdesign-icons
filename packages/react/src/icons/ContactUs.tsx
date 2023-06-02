import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const ContactUs = ({
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
          id="560.联系我们"
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
              d="M15.8015794,7.55859915 C16.2383519,7.55859915 16.6519886,7.75173074 16.939431,8.08649222 C17.1481237,8.32912611 17.3598672,8.56901068 17.5746089,8.8060863 C17.894301,9.18090473 18.2497481,9.59721066 18.6416515,10.0535735 C19.0335548,10.5106517 19.4366753,10.9755982 19.8524152,11.4484129 C20.3126778,11.9823716 20.7487383,12.5375506 21.159227,13.1122061 C21.4649203,13.5381146 21.7375348,13.9877386 21.9745821,14.4569743 C22.1743897,14.8646966 22.3096979,15.239515 22.3819091,15.5821448 L22.3819091,15.5821448 C22.4534192,15.9254899 22.4898753,16.2681197 22.4898753,16.6100341 L22.4898753,16.6100341 L22.4898753,18.1994358 C22.4898753,18.6887026 22.4099523,19.1293288 22.2494051,19.5205992 C22.0902602,19.9118695 21.8708224,20.2502074 21.5903907,20.5356131 C21.3159263,20.8175374 20.9901353,21.0420534 20.6313143,21.1965524 C20.2716606,21.3510576 19.8923768,21.4283884 19.4927616,21.4283884 L19.4927616,21.4283884 L4.69998984,21.4283884 C4.27895444,21.4303236 3.86091967,21.3559679 3.46538928,21.2087125 C3.07348601,21.0620755 2.72995717,20.8539226 2.43480284,20.5842536 C2.13894738,20.3152999 1.90268369,19.9934139 1.72671278,19.6185956 C1.55144299,19.2430619 1.46304114,18.8196029 1.46304114,18.3460728 L1.46304114,18.3460728 L1.46304114,16.4626819 C1.46180789,16.0848697 1.49798085,15.7078928 1.5710732,15.3375114 C1.65440543,14.9464212 1.78757415,14.5681484 1.96718299,14.212341 C2.19174199,13.7682335 2.45649959,13.3465165 2.75800037,12.9526936 C3.15301069,12.4346947 3.57717687,11.9405424 4.02835593,11.4727332 C4.44409593,11.0163704 4.87175423,10.5550004 5.31133091,10.0900539 C5.75090759,9.6258227 6.14631628,9.20594028 6.49825805,8.83112196 L6.49825805,8.83112196 L7.25121711,8.03212926 C7.53655641,7.73027166 7.9298619,7.55859915 8.34069423,7.55859915 L8.34069423,7.55859915 L15.8015794,7.55859915 Z M11.9884095,10.6407394 C11.5805842,10.639237 11.1767196,10.7224761 10.8014824,10.88547 C10.426405,11.048559 10.1025063,11.2688721 9.83048759,11.5464094 C9.55916999,11.8232313 9.34323758,12.1494092 9.18339149,12.5242276 C9.0235455,12.8997613 8.94357646,13.2989 8.94357646,13.7230742 C8.94201526,14.1391772 9.02360077,14.5512431 9.18339149,14.9340809 C9.33431695,15.3038737 9.55406892,15.6403104 9.83048759,15.9247746 C10.109318,16.206773 10.4390593,16.4309792 10.8014824,16.5849986 C11.1767196,16.7479926 11.5805842,16.8312317 11.9884095,16.8297293 C12.3924595,16.8320133 12.7925865,16.7487081 13.1634183,16.5849986 C13.5211506,16.4287765 13.8465944,16.2047424 14.1224947,15.9247746 C14.3988169,15.6402301 14.6185556,15.3038138 14.7695908,14.9340809 C14.9294369,14.5506789 15.0093599,14.1472485 15.0093599,13.7230742 C15.0093599,13.2989 14.9294369,12.8997613 14.7695908,12.5242276 C14.6097448,12.1494092 14.3938124,11.8232313 14.1224947,11.5464094 C13.850476,11.2688721 13.5307839,11.048559 13.1634183,10.88547 C12.7925865,10.7217607 12.3924595,10.6384554 11.9884095,10.6407394 Z M12.0122462,4.4408921e-16 C13.5469086,4.4408921e-16 14.9175185,0.138768652 16.1240759,0.41630593 C17.3306333,0.693127904 18.3780456,1.0114374 19.2649109,1.36980385 C20.1524771,1.7288856 20.8633716,2.07509189 21.3989961,2.40985337 C21.9107839,2.7288782 22.2648289,2.94060766 22.4632343,3.04361119 C22.6524095,3.15687442 22.8453185,3.26351654 23.0416247,3.3633513 C23.2107051,3.44910706 23.3710923,3.55165226 23.5204618,3.66950069 C23.6648842,3.78394905 23.7798611,3.90984223 23.8681972,4.04861089 C23.9558321,4.18737954 24,4.35404495 24,4.55003778 L24,6.1401547 C24,6.56432897 23.8527734,6.92269545 23.5569179,7.21668471 C23.2610625,7.50995861 22.9049142,7.65659555 22.4898753,7.65659555 L19.4927616,7.65659555 C19.0965972,7.66494635 18.7146948,7.50572058 18.4376374,7.21668471 C18.1543487,6.93400654 17.9982889,6.54435634 18.0064737,6.1401547 C18.0064737,5.28894506 17.3299322,4.59867834 16.4956479,4.59867834 L7.50500784,4.59867834 C6.67072354,4.59867834 5.99488317,5.28894506 5.99488317,6.1401547 C5.99488317,6.56432897 5.85116195,6.92269545 5.56301835,7.21668471 C5.27557585,7.50995861 4.92363411,7.65659555 4.50789413,7.65659555 L1.51148149,7.65659555 C1.09574149,7.65659555 0.740294295,7.50995861 0.444438893,7.21668471 C0.154558672,6.93759255 -0.00656371886,6.54674149 0.000204987313,6.1401547 L0.000204987313,4.55003778 C0.000204987313,4.35404495 0.0490302017,4.18737954 0.144376971,4.04861089 C0.240424837,3.90984223 0.360309381,3.78394905 0.504030603,3.66950069 C0.648452949,3.55505233 0.808299017,3.45347938 0.983568807,3.3633513 C1.14692027,3.28037624 1.30957067,3.18667163 1.47222104,3.08295283 C1.49886204,3.06578557 1.52620414,3.05004892 1.55354622,3.03431227 C1.74634302,2.92773222 2.12773012,2.71957926 2.69770754,2.40985337 C3.3132551,2.07509189 4.08864874,1.7288856 5.02388844,1.36980385 C5.95842704,1.0114374 7.02196422,0.693127904 8.21239673,0.41630593 C9.40282935,0.138768652 10.6696795,4.4408921e-16 12.0122462,4.4408921e-16 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
ContactUs.displayName = 'ContactUs';
export default ContactUs;