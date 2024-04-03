import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const MqPerformance = ({
  size = '1em',
  fill = 'currentColor',
  rotate = 0,
  spin = false,
  ...restProps
}: SvgIconProps) => {
  return (
    <IconWrapper rotate={rotate} spin={spin} {...restProps}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1024 1024"
        version="1.1"
        width={size}
        height={size}
      >
        <path
          d="M937.5 42.187497C954.758897 42.187497 968.75 56.178599 968.75 73.437497C968.75 90.696396 954.758897 104.687497 937.5 104.687497L62.5 104.687497C45.241102 104.687497 31.25 90.696396 31.25 73.437497C31.25 56.178599 45.241102 42.187497 62.5 42.187497L937.5 42.187497zM937.5 195.312459C954.758897 195.312459 968.75 209.303561 968.75 226.562459L968.75 401.562416C968.75 418.821313 954.758897 432.812416 937.5 432.812416L881.25 432.781247L881.25 873.406247L937.5 873.437291C954.758897 873.437291 968.75 887.428391 968.75 904.687291C968.75 921.946188 954.758897 935.937291 937.5 935.937291L62.5 935.937291C45.241102 935.937291 31.25 921.946188 31.25 904.687291C31.25 887.428391 45.241102 873.437291 62.5 873.437291L118.71875 873.406247L118.71875 782.781247L62.5 782.812328C45.241102 782.812328 31.25 768.821225 31.25 751.562328L31.25 576.562372C31.25 559.303472 45.241102 545.312372 62.5 545.312372L237.500175 545.312372C254.759073 545.312372 268.750175 559.303472 268.750175 576.562372L268.750175 751.562328C268.750175 768.821225 254.759073 782.812328 237.500175 782.812328L181.21875 782.781247L181.21875 873.406247L468.75 873.406247L468.75 607.781247L412.500131 607.812372C395.241234 607.812372 381.250131 593.821269 381.250131 576.562372L381.250131 401.562416C381.250131 384.303516 395.241234 370.312416 412.500131 370.312416L587.500088 370.312416C604.758984 370.312416 618.750088 384.303516 618.750088 401.562416L618.750088 576.562372C618.750088 593.821269 604.758984 607.812372 587.500088 607.812372L531.25 607.781247L531.25 873.406247L818.75 873.406247L818.75 432.781247L762.500044 432.812416C745.241147 432.812416 731.250044 418.821313 731.250044 401.562416L731.250044 226.562459C731.250044 209.303561 745.241147 195.312459 762.500044 195.312459L937.5 195.312459zM206.25 607.812372L93.75 607.812372L93.75 720.281122L206.25 720.281122L206.25 607.812372zM556.218881 432.812416L443.750131 432.812416L443.750131 545.281166L556.218881 545.281166L556.218881 432.812416zM149.999978 370.312416C167.258877 370.312416 181.249978 384.303516 181.249978 401.562416L181.249978 423.437409C181.249978 440.696309 167.258877 454.687409 149.999978 454.687409C132.74108 454.687409 118.749978 440.696309 118.749978 423.437409L118.749978 401.562416C118.749978 384.303516 132.74108 370.312416 149.999978 370.312416zM906.218794 257.812459L793.750044 257.812459L793.750044 370.281209L906.218794 370.281209L906.218794 257.812459zM149.999978 195.312459C167.258877 195.312459 181.249978 209.303561 181.249978 226.562459L181.249978 248.437453C181.249978 265.696352 167.258877 279.687453 149.999978 279.687453C132.74108 279.687453 118.749978 265.696352 118.749978 248.437453L118.749978 226.562459C118.749978 209.303561 132.74108 195.312459 149.999978 195.312459zM478.125116 195.312459C495.384013 195.312459 509.375116 209.303561 509.375116 226.562459L509.375116 248.437453C509.375116 265.696352 495.384013 279.687453 478.125116 279.687453C460.866216 279.687453 446.875116 265.696352 446.875116 248.437453L446.875116 226.562459C446.875116 209.303561 460.866216 195.312459 478.125116 195.312459z"
          fill="#666666"
        ></path>
      </svg>
    </IconWrapper>
  );
};
MqPerformance.displayName = 'MqPerformance';
export default MqPerformance;
