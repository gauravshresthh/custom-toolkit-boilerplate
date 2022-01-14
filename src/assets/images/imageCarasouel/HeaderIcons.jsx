import React from 'react';

const HeaderIcons = {
  closeIcon: ({ width = '16', height = '16', color = 'white' }) => (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 2.01429L17.9857 0L10 7.98571L2.01429 0L0 2.01429L7.98571 10L0 17.9857L2.01429 20L10 12.0143L17.9857 20L20 17.9857L12.0143 10L20 2.01429Z"
        fill={color}
      />
    </svg>
  ),
  forwardIcon: ({ width = '24', height = '20', color = 'white' }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="14"
      viewBox="0 0 16 14"
      fill="none"
    >
      <path
        d="M15 6.875L1 6.875"
        stroke="#666666"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.875 13L15 6.875L8.875 0.75"
        stroke="#666666"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  downloadIcon: ({ width = '20', height = '20', color = 'white' }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="13"
      viewBox="0 0 14 13"
      fill="none"
    >
      <path
        d="M0.4375 7.78711C0.553532 7.78711 0.664812 7.8332 0.746859 7.91525C0.828906 7.9973 0.875 8.10858 0.875 8.22461V10.4121C0.875 10.6442 0.967187 10.8667 1.13128 11.0308C1.29538 11.1949 1.51794 11.2871 1.75 11.2871H12.25C12.4821 11.2871 12.7046 11.1949 12.8687 11.0308C13.0328 10.8667 13.125 10.6442 13.125 10.4121V8.22461C13.125 8.10858 13.1711 7.9973 13.2531 7.91525C13.3352 7.8332 13.4465 7.78711 13.5625 7.78711C13.6785 7.78711 13.7898 7.8332 13.8719 7.91525C13.9539 7.9973 14 8.10858 14 8.22461V10.4121C14 10.8762 13.8156 11.3214 13.4874 11.6495C13.1592 11.9777 12.7141 12.1621 12.25 12.1621H1.75C1.28587 12.1621 0.840752 11.9777 0.512563 11.6495C0.184374 11.3214 0 10.8762 0 10.4121V8.22461C0 8.10858 0.0460936 7.9973 0.128141 7.91525C0.210188 7.8332 0.321468 7.78711 0.4375 7.78711Z"
        fill="#666666"
      />
      <path
        d="M6.69019 9.49725C6.73083 9.53799 6.77911 9.57032 6.83226 9.59237C6.88541 9.61443 6.9424 9.62578 6.99994 9.62578C7.05749 9.62578 7.11447 9.61443 7.16762 9.59237C7.22077 9.57032 7.26905 9.53799 7.30969 9.49725L9.93469 6.87225C10.0168 6.7901 10.063 6.67868 10.063 6.5625C10.063 6.44632 10.0168 6.3349 9.93469 6.25275C9.85254 6.1706 9.74112 6.12445 9.62494 6.12445C9.50876 6.12445 9.39734 6.1706 9.31519 6.25275L7.43744 8.13138V0.4375C7.43744 0.321468 7.39135 0.210188 7.3093 0.128141C7.22725 0.0460936 7.11597 0 6.99994 0C6.88391 0 6.77263 0.0460936 6.69058 0.128141C6.60854 0.210188 6.56244 0.321468 6.56244 0.4375V8.13138L4.68469 6.25275C4.60254 6.1706 4.49112 6.12445 4.37494 6.12445C4.25876 6.12445 4.14734 6.1706 4.06519 6.25275C3.98304 6.3349 3.93689 6.44632 3.93689 6.5625C3.93689 6.67868 3.98304 6.7901 4.06519 6.87225L6.69019 9.49725Z"
        fill="#666666"
      />
    </svg>
  ),
  deleteIcons: ({ width = '18', height = '22', color = 'white' }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="13"
      height="16"
      viewBox="0 0 13 16"
      fill="none"
    >
      <path
        d="M4.74974 6.07422C4.56865 6.07422 4.42188 6.22099 4.42188 6.40209V12.5988C4.42188 12.7798 4.56865 12.9267 4.74974 12.9267C4.93084 12.9267 5.07761 12.7798 5.07761 12.5988V6.40209C5.07761 6.22099 4.93084 6.07422 4.74974 6.07422Z"
        fill="#666666"
      />
      <path
        d="M1.9312 5.16793V13.2459C1.9312 13.7234 2.10627 14.1717 2.41211 14.4935C2.71654 14.8161 3.14021 14.9992 3.5836 15H9.78696C10.2305 14.9992 10.6541 14.8161 10.9585 14.4935C11.2643 14.1717 11.4394 13.7234 11.4394 13.2459V5.16793C12.0473 5.00656 12.4413 4.41922 12.36 3.79537C12.2785 3.17166 11.7471 2.70508 11.118 2.70496H9.43937V2.29512C9.44129 1.95048 9.30502 1.61953 9.06104 1.37607C8.81706 1.13273 8.48561 0.997225 8.14096 1.00004H5.2296C4.88495 0.997225 4.5535 1.13273 4.30952 1.37607C4.06554 1.61953 3.92927 1.95048 3.93119 2.29512V2.70496H2.25253C1.62344 2.70508 1.09206 3.17166 1.01061 3.79537C0.92928 4.41922 1.32323 5.00656 1.9312 5.16793ZM9.78696 14.3443H3.5836C3.02302 14.3443 2.58693 13.8627 2.58693 13.2459V5.19675H10.7836V13.2459C10.7836 13.8627 10.3475 14.3443 9.78696 14.3443ZM4.58693 2.29512C4.58475 2.1244 4.65186 1.96008 4.77302 1.83956C4.89405 1.71905 5.05875 1.65283 5.2296 1.65578H8.14096C8.31181 1.65283 8.47652 1.71905 8.59755 1.83956C8.7187 1.95995 8.78581 2.1244 8.78364 2.29512V2.70496H4.58693V2.29512ZM2.25253 3.36069H11.118C11.444 3.36069 11.7082 3.62491 11.7082 3.95085C11.7082 4.2768 11.444 4.54102 11.118 4.54102H2.25253C1.92659 4.54102 1.66237 4.2768 1.66237 3.95085C1.66237 3.62491 1.92659 3.36069 2.25253 3.36069Z"
        fill="#666666"
        stroke="#666666"
        strokeWidth="0.2"
      />
      <path
        d="M6.68724 6.07422C6.50615 6.07422 6.35938 6.22099 6.35938 6.40209V12.5988C6.35938 12.7798 6.50615 12.9267 6.68724 12.9267C6.86834 12.9267 7.01511 12.7798 7.01511 12.5988V6.40209C7.01511 6.22099 6.86834 6.07422 6.68724 6.07422Z"
        fill="#666666"
      />
    </svg>
  ),
  HorizontalThreeDots: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="4"
      viewBox="0 0 16 4"
      fill="none"
    >
      <path
        d="M12 2C12 1.46957 12.2107 0.960859 12.5858 0.585787C12.9609 0.210714 13.4696 -1.10609e-07 14 -8.74228e-08C14.5304 -6.42368e-08 15.0391 0.210714 15.4142 0.585787C15.7893 0.96086 16 1.46957 16 2C16 2.53043 15.7893 3.03914 15.4142 3.41421C15.0391 3.78929 14.5304 4 14 4C13.4696 4 12.9609 3.78929 12.5858 3.41421C12.2107 3.03914 12 2.53043 12 2Z"
        fill="white"
      />
      <path
        d="M6 2C6 1.46957 6.21071 0.960859 6.58579 0.585787C6.96086 0.210714 7.46957 -1.10609e-07 8 -8.74228e-08C8.53043 -6.42368e-08 9.03914 0.210714 9.41421 0.585787C9.78929 0.96086 10 1.46957 10 2C10 2.53043 9.78929 3.03914 9.41421 3.41421C9.03914 3.78929 8.53043 4 8 4C7.46957 4 6.96086 3.78929 6.58579 3.41421C6.21071 3.03914 6 2.53043 6 2Z"
        fill="white"
      />
      <path
        d="M2 -8.74228e-08C1.46957 -1.10609e-07 0.96086 0.210714 0.585787 0.585787C0.210714 0.960859 -6.42368e-08 1.46957 -8.74228e-08 2C-1.10609e-07 2.53043 0.210714 3.03914 0.585787 3.41421C0.960859 3.78929 1.46957 4 2 4C2.53043 4 3.03914 3.78929 3.41421 3.41421C3.78929 3.03914 4 2.53043 4 2C4 1.46957 3.78929 0.96086 3.41421 0.585787C3.03914 0.210714 2.53043 -6.42368e-08 2 -8.74228e-08Z"
        fill="white"
      />
    </svg>
  ),
};

export default HeaderIcons;
