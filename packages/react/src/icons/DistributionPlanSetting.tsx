import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const DistributionPlanSetting = ({
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
          id="537.配送计划设置"
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
              d="M20.6935236,14.3485714 C20.6935236,15.1749981 21.3713347,15.8450234 22.2073646,15.8450234 C22.4809829,15.8450234 22.7375443,15.7732764 22.959168,15.6476902 L22.959168,15.6476902 L24,17.4465955 C23.544636,17.7046284 23.2378447,18.189763 23.2378447,18.7457143 C23.2378447,19.3016655 23.544636,19.7868002 24,20.0448331 L24,20.0448331 L22.959168,21.8437383 C22.7375443,21.7181522 22.4809829,21.6464052 22.2073646,21.6464052 C21.3713347,21.6464052 20.6936412,22.3163143 20.6936412,23.1428571 L20.6936412,23.1428571 L18.6324458,23.1428571 C18.6324458,22.3163143 17.9547523,21.6464052 17.1187224,21.6464052 C16.8451041,21.6464052 16.5884251,21.7181522 16.3670366,21.8437383 L16.3670366,21.8437383 L15.326087,20.0448331 C15.781451,19.7868002 16.0881247,19.3016655 16.0881247,18.7457143 C16.0881247,18.189763 15.781451,17.7046284 15.326087,17.4465955 L15.326087,17.4465955 L16.3670366,15.6476902 C16.5884251,15.7732764 16.8451041,15.8450234 17.1187224,15.8450234 C17.9547523,15.8450234 18.6325634,15.1749981 18.6325634,14.3485714 L18.6325634,14.3485714 L20.6935236,14.3485714 Z M19.3105761,0 C20.248651,0 21.0209518,0.719612379 21.1197561,1.64406841 L21.1304349,1.84511388 L21.1304349,13.0922449 L18.3381405,13.0922449 C18.3381405,14.1547933 17.4666689,15.0162545 16.3917734,15.0162545 C16.0399785,15.0162545 15.7099627,14.9240085 15.4253203,14.7625406 L14.0869565,17.0754187 C14.6724245,17.4071753 15.0667191,18.0309199 15.0667191,18.7457143 C15.0667191,19.4605087 14.6724245,20.0842533 14.0869565,20.4160099 L14.6691429,21.4234286 L1.8198587,21.4236735 C0.881432585,21.4236735 0.109436105,20.7036159 0.0106739931,19.779516 L0,19.5785595 L0,1.84511388 C0,0.894020846 0.709762587,0.111002277 1.62156505,0.01082688 L1.8198587,0 L19.3105761,0 Z M19.6785713,17.2961935 C18.878562,17.2961935 18.2277432,17.9564955 18.2277432,18.7681623 C18.2277432,19.579829 18.878562,20.2402668 19.6785713,20.2402668 C20.4785806,20.2402668 21.1293994,19.579829 21.1293994,18.7681623 C21.1293994,17.9564955 20.4785806,17.2961935 19.6785713,17.2961935 Z M3.62795032,11.1428571 C3.04070032,11.1428571 2.57142857,11.6222118 2.57142857,12.2140408 C2.57142857,12.8094404 3.04422207,13.2852245 3.62795032,13.2852245 C4.21520031,13.2852245 4.68447206,12.8058698 4.68447206,12.2140408 C4.68447206,11.6186412 4.21167856,11.1428571 3.62795032,11.1428571 Z M15.3930612,11.1428571 L8.60693878,11.1428571 C8.11394011,11.1428571 7.71428571,11.5425115 7.71428571,12.0355102 C7.71428571,12.4737313 8.03006203,12.8381988 8.44648328,12.9137815 L8.60693878,12.9281633 L15.3930612,12.9281633 C15.8860599,12.9281633 16.2857143,12.5285089 16.2857143,12.0355102 C16.2857143,11.5425115 15.8860599,11.1428571 15.3930612,11.1428571 Z M3.62795032,6 C3.04070032,6 2.57142857,6.47935469 2.57142857,7.07118366 C2.57142857,7.66658326 3.04422207,8.14236735 3.62795032,8.14236735 C4.21520031,8.14236735 4.68447206,7.66301264 4.68447206,7.07118366 C4.68447206,6.47578409 4.21167856,6 3.62795032,6 Z M15.3930612,6 L8.60693878,6 C8.11394011,6 7.71428571,6.39965439 7.71428571,6.89265307 C7.71428571,7.33087411 8.03006203,7.69534165 8.44648328,7.77092432 L8.60693878,7.78530613 L15.3930612,7.78530613 C15.8860599,7.78530613 16.2857143,7.38565174 16.2857143,6.89265307 C16.2857143,6.39965439 15.8860599,6 15.3930612,6 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
DistributionPlanSetting.displayName = 'DistributionPlanSetting';
export default DistributionPlanSetting;
