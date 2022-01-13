import { FC } from "react";

export const MovingIcon: FC<{ width?: number; height?: number }> = ({ height = 90, width = 90 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 34.5 34.5" data-cy="moving-nav">
    <path
      d="M21.06,23.612H9.369a3.409,3.409,0,0,1-6.7,0H.674A.675.675,0,0,1,0,22.938v-7.5a.671.671,0,0,1,.057-.27L3,8.448a.673.673,0,0,1,.617-.4h6.725V.674A.675.675,0,0,1,11.018,0h8.354a.674.674,0,0,1,0,1.348h-7.68V22.264h9.074c0-.093-.006-.175-.006-.248a4.383,4.383,0,1,1,8.766,0c0,.074,0,.155-.006.248h3.633V1.348h-7.68a.674.674,0,0,1,0-1.348h8.354A.675.675,0,0,1,34.5.674V22.938a.675.675,0,0,1-.674.674h-4.6a4.382,4.382,0,0,1-8.166,0Zm1.048-1.6a3.035,3.035,0,1,0,3.035-3.039A3.04,3.04,0,0,0,22.108,22.016Zm-18.151.975a2.061,2.061,0,1,0,2.061-2.064A2.065,2.065,0,0,0,3.956,22.991Zm5.391-.727h1V9.391H4.06L1.348,15.582v6.682H2.687a3.408,3.408,0,0,1,6.66,0Zm11.274-4.523a.5.5,0,0,1-.3-.539l.7-4.422h-2.8a.5.5,0,0,1-.4-.812L23.659,4.5a.5.5,0,0,1,.894.388l-.7,4.423h2.8a.5.5,0,0,1,.4.812L21.218,17.59a.5.5,0,0,1-.6.151Zm-1.365-5.968H21.61a.505.505,0,0,1,.383.176.513.513,0,0,1,.115.406l-.486,3.084,4-5.121H23.267a.505.505,0,0,1-.5-.582l.486-3.086ZM3.695,16.749a.674.674,0,0,1-.617-.944l1.9-4.333a.675.675,0,0,1,.617-.4H8a.675.675,0,0,1,.674.674v4.333A.675.675,0,0,1,8,16.749ZM4.726,15.4h2.6V12.416H6.033ZM21.776.822a.674.674,0,1,1,1.3.058.674.674,0,0,1-1.3-.058Z"
      transform="translate(0 4.318)"
      fill="currentColor"
    />
  </svg>
);