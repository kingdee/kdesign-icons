import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const ProjectProcessDocument = ({
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
          id="452.项目过程文件"
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
              d="M18,11.2 C21.3137085,11.2 24,13.8862915 24,17.2 C24,20.5137085 21.3137085,23.2 18,23.2 C14.6862915,23.2 12,20.5137085 12,17.2 C12,13.8862915 14.6862915,11.2 18,11.2 Z M8.7641398,0 C9.12545532,0 9.44321835,0.238958837 9.5434977,0.586079801 L10.545959,4.05613807 L21.9031456,4.05613807 C22.3511743,4.05613807 22.7143732,4.41933705 22.7143732,4.8673657 L22.7143732,12.2448497 C21.4931585,11.0760732 19.8370351,10.358059 18.0132105,10.358059 C14.2576741,10.358059 11.2132105,13.4025227 11.2132105,17.158059 C11.2132105,17.9695518 11.3553569,18.7478444 11.6161089,19.4694628 L0.811227603,19.4694628 C0.363198979,19.4694628 0,19.1062638 0,18.6582352 L0,0.811227603 C0,0.363198979 0.363198979,0 0.811227603,0 L8.7641398,0 Z M18.1631206,13.6026596 L18.1003232,13.6071087 C17.915051,13.639798 17.7708566,13.7818113 17.7377028,13.9619121 L17.7304965,14.0412224 L17.7304965,18.6165188 L22.0817657,18.6165188 C22.2919041,18.6165188 22.4780002,18.4598924 22.5167607,18.2533456 L22.5241486,18.1737589 L22.5170212,18.0960557 C22.484246,17.9186234 22.3418591,17.772201 22.1612846,17.7383678 L22.0817657,17.730999 L18.5930851,17.7303191 L18.5931529,14.0412224 C18.5931529,13.8461883 18.4708576,13.6876283 18.2991697,13.6267885 L18.2227776,13.6068757 L18.1631206,13.6026596 Z M5.77211149,10.954566 L3.4053905,13.5231654 L5.27297952,13.5231654 L5.27297952,18.3936521 L6.24398306,18.3936521 L6.24398306,13.5231654 L8.13883245,13.5231654 L5.77211149,10.954566 Z M18.1795551,7.1401867 L7.52952633,7.1401867 C7.29451152,7.1401867 7.10399441,7.3307038 7.10399441,7.56571861 L7.10399441,7.56571861 L7.10399441,7.58668511 C7.10399441,7.82169983 7.29451152,8.01221702 7.52952633,8.01221702 L7.52952633,8.01221702 L18.1795551,8.01221702 C18.41457,8.01221702 18.6050871,7.82169983 18.6050871,7.58668511 L18.6050871,7.58668511 L18.6050871,7.56571861 C18.6050871,7.3307038 18.41457,7.1401867 18.1795551,7.1401867 L18.1795551,7.1401867 Z M4.8474476,7.1401867 L4.00458369,7.1401867 C3.76956891,7.1401867 3.57905177,7.3307038 3.57905177,7.56571861 L3.57905177,7.56571861 L3.57905177,7.58668511 C3.57905177,7.82169983 3.76956891,8.01221702 4.00458369,8.01221702 L4.00458369,8.01221702 L4.8474476,8.01221702 C5.08246238,8.01221702 5.27297952,7.82169983 5.27297952,7.58668511 L5.27297952,7.58668511 L5.27297952,7.56571861 C5.27297952,7.3307038 5.08246238,7.1401867 4.8474476,7.1401867 L4.8474476,7.1401867 Z M11.1918694,1.68333807 L19.4996256,1.68333807 C19.9476543,1.68333807 20.3108533,2.04653705 20.3108533,2.4945657 C20.3108533,2.51359444 20.3101837,2.53261728 20.3088459,2.55159895 L20.2771146,3.00182014 L20.2771146,3.00182014 L11.5938801,3.00182014 L11.1918694,1.68333807 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
ProjectProcessDocument.displayName = 'ProjectProcessDocument';
export default ProjectProcessDocument;