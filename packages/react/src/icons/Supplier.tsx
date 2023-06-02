import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const Supplier = ({
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
          id="1293-供应商"
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
              d="M7.49830379,12.6001658 C6.68008095,13.3004697 5.60818412,13.7142857 4.28261332,13.7142857 C2.46710362,13.7142857 0.671489911,12.1545178 0.149219986,10.2313347 C0.0497399863,9.87852996 0,9.51246197 0,9.14108871 C0,8.47261671 0.0969929966,7.76700746 0.283517952,7.02426087 C0.591905911,5.79342361 1.12661083,4.50953302 1.82545772,3.20176844 C2.36264964,2.20436585 2.95952953,1.25205858 3.61609745,0.342193975 C3.7802394,0.124675337 4.02645238,0 4.28510033,0 L19.7151889,0 C19.9763239,0 20.2225368,0.124675337 20.3841918,0.342193975 C21.0407597,1.24940591 21.6376396,2.20701852 22.1748316,3.20176844 C22.8761654,4.50953302 23.4133573,5.79872893 23.7192583,7.02426087 C23.9754192,8.01635811 24.0574902,9.04559271 23.9604972,10.069522 C23.7366673,12.2208345 22.5727515,13.7116331 20.1280308,13.7116331 C18.6283701,13.7116331 17.4470452,13.3110804 16.5691344,12.6187345 C16.4771154,12.5471125 16.3850964,12.4675324 16.3005384,12.3906052 C16.2284154,12.4595745 16.1513185,12.5311965 16.0742215,12.5948605 C15.2559986,13.2951644 13.3269589,13.7089804 12.0013881,13.7089804 C10.6783043,13.7089804 8.74926463,13.2925118 7.92855473,12.5948605 C7.85643179,12.5338491 7.7818218,12.4701851 7.71467282,12.4012158 C7.6450368,12.4701851 7.57540082,12.5365018 7.49830379,12.6001658 Z M4.44842979,2.1049855 C4.06032563,2.70188794 3.67222146,3.35576742 3.31397146,4.0476316 C2.67957043,5.25500245 2.20190375,6.43252817 1.93819195,7.51237896 C1.79638467,8.06044389 1.72174925,8.62478804 1.71428572,9.19455857 C1.71428572,9.38719527 1.74165202,9.58525836 1.79389681,9.78603465 C2.10985341,10.9798395 3.26172667,12 4.28671971,12 C5.2146867,12 5.90879608,11.7232543 6.42875614,11.2701511 C6.72232211,11.0123978 6.89149569,10.7654972 6.94871625,10.6461167 C7.0954992,10.3313864 7.391553,10.1306101 7.71497316,10.1306101 C8.03839329,10.1306101 8.33444709,10.3313864 8.48123008,10.6461167 C8.5384506,10.7654972 8.70513636,11.0123978 9.00119016,11.2701511 C9.52115024,11.7232543 11.0776702,12 12.0006616,12 C12.9286286,12 14.4801729,11.7232543 15.000133,11.2701511 C15.2936989,11.0123978 15.4628725,10.7654972 15.520093,10.6461167 C15.666876,10.32596 15.9679055,10.1251837 16.2938135,10.1278969 C16.6197214,10.1306101 16.9182632,10.3368128 17.0600704,10.6596827 C17.1048517,10.7627841 17.2690496,10.9934055 17.5850062,11.2457324 C18.1646745,11.7124016 18.9906399,12 20.1275861,12 C21.5730252,12 22.1203516,11.2837171 22.2571832,9.93797341 C22.3293308,9.12401555 22.2646468,8.30191809 22.0631311,7.51237896 C21.7994194,6.42981499 21.3192648,5.25500245 20.6873517,4.0476316 C20.2619297,3.24181333 19.7991902,2.46041376 19.2941572,1.71428572 L4.70716589,1.71428572 C4.63253047,1.82552662 4.54794366,1.95304668 4.44842979,2.1049855 Z M20.5696252,20.3581919 L20.5696252,15.5379874 C20.5696252,15.1938868 20.7337728,14.8749644 20.999891,14.7015154 C21.2660092,14.5280663 21.5918174,14.5280663 21.8554485,14.7015154 C22.1215666,14.8749644 22.2857143,15.1938868 22.2857143,15.5379874 L22.2857143,21.3233519 C22.2857143,21.8576868 21.900216,22.2857143 21.4301568,22.2857143 L2.56984317,22.2857143 C2.09480983,22.2857143 1.71428572,21.8520917 1.71428572,21.3233519 L1.71428572,15.5379874 C1.71428572,15.1938868 1.87843337,14.8749644 2.14455154,14.7015154 C2.41066969,14.5280663 2.73647792,14.5280663 3.000109,14.7015154 C3.26622717,14.8749644 3.43037483,15.1938868 3.43037483,15.5379874 L3.43037483,20.3581919 L20.5696252,20.3581919 Z M6,6.85465835 C6,6.3850932 6.38542843,6 6.85540244,6 L17.1408676,6 C17.4467237,6 17.7302002,6.16397511 17.8843715,6.4298137 C18.0385428,6.69565218 18.0385428,7.02111797 17.8843715,7.28447202 C17.7302002,7.55031061 17.4467237,7.71428572 17.1408676,7.71428572 L6.85540244,7.71428572 C6.38294178,7.70931679 6,7.32422357 6,6.85465835 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
Supplier.displayName = 'Supplier';
export default Supplier;