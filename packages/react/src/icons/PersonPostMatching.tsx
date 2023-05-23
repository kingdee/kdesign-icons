import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const PersonPostMatching = ({
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
          id="771.人岗匹配"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(1.988077, 2.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M14.6610408,16.1904372 C14.8646694,16.2731184 14.8912022,16.3750958 14.6579804,16.4963694 L14.6579804,18.2861742 C14.6579804,18.2861742 15.5916124,18.6097394 16.7291516,18.9939582 C16.0360354,20.0970504 15.635179,21.4023642 15.635179,22.801303 C15.635179,23.9742314 15.9169752,25.0813444 16.4165596,26.0586312 L0,26.0586312 C0,23.0098316 1.4657986,20.7232326 3.2441122,20.1419274 C5.0224258,19.5606222 8.7947888,18.2862288 8.7947888,18.2862288 L8.7947888,16.4963694 C8.6333744,16.4124352 8.596385,16.3377452 8.6564156,16.272298 C8.62323,16.2518538 8.6056908,16.2403836 8.6056908,16.2403836 C7.115843,15.4990766 7.3248728,14.0496846 6.3709198,13.1407906 C5.4169668,12.231898 4.145785,11.7179076 3.9476094,9.85858158 C3.7489536,8.00036718 4.3543514,7.76275218 4.8214292,7.76275218 L4.8214292,4.60162358 C5.0391236,2.04623718 7.8643096,0.360586779 10.2825898,0.0812993787 C12.718993,-0.382475821 17.852772,1.15743038 18.2896952,4.20258018 L18.2896952,7.76275218 C18.2896952,7.76275218 19.4218948,7.99875298 19.2231872,9.85807898 C19.0250368,11.7162934 17.7132298,12.2319246 16.7998488,13.1407906 C15.9066432,14.0302554 16.048039,15.4355824 14.6610408,16.1904372 Z M22.8278092,20.2016696 C24.0398508,20.229384 25.0158118,21.205345 25.0435262,22.4173852 C25.0158118,23.6294268 24.0398508,24.6053878 22.8278092,24.6331022 C21.6157676,24.6053878 20.6398066,23.6294268 20.6120922,22.4173852 C20.643105,21.2067576 21.6171816,20.2326824 22.8278092,20.2016696 Z M22.8278092,23.1581434 C23.2258544,23.1325906 23.5430146,22.8154304 23.568566,22.4173852 C23.5367664,22.0244626 23.2212372,21.714518 22.8278092,21.6897394 C22.4382508,21.7180082 22.1284322,22.0278268 22.1001634,22.4173852 C22.124942,22.8108132 22.4348866,23.1263438 22.8278092,23.1581434 Z M26.1054962,23.007369 L28,23.0860336 C27.8602674,24.2332846 27.3384062,25.3000986 26.518485,26.1146172 C25.6730754,26.9345314 24.580983,27.4529304 23.4112382,27.589576 L23.4112382,25.7409614 C24.0970282,25.611628 24.7277044,25.2780094 25.2205212,24.7838766 C25.6591762,24.2748618 25.9634172,23.6641258 26.1054962,23.007369 Z M26.1054962,21.6962942 C25.9634172,21.0395388 25.6591762,20.4288028 25.2205212,19.919788 C24.678717,19.4711496 24.0348444,19.1627198 23.3456846,19.021702 L23.3456846,17.173086 C24.5153146,17.3081146 25.606476,17.8294732 26.4463766,18.654601 C27.2705972,19.4686884 27.793101,20.539127 27.9278902,21.6897394 L26.1054962,21.6962942 Z M19.4321246,23.0008142 C19.5742036,23.6575696 19.8784446,24.2683056 20.317101,24.7773204 C20.8019868,25.2692552 21.4229694,25.604859 22.1001634,25.7409614 L22.1001634,27.589576 C20.9304172,27.4529304 19.8383248,26.9345314 18.9929152,26.1146172 C18.1729954,25.3000986 17.6511342,24.2332846 17.5114002,23.0860336 L19.4321246,23.0008142 Z M19.4321246,21.6897394 L17.58351,21.6897394 C17.7183006,20.539127 18.2408044,19.4686884 19.0650236,18.654601 C19.883591,17.8241518 20.9478318,17.2793894 22.1001634,17.1009776 L22.1001634,18.9495922 C21.4237352,19.0838662 20.8028366,19.4171418 20.317101,19.906677 C19.8774716,20.4175608 19.5731746,21.0306642 19.4321246,21.6897394 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
PersonPostMatching.displayName = 'PersonPostMatching';
export default PersonPostMatching;
