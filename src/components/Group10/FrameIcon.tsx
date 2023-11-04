import { memo, SVGProps } from 'react';

const FrameIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 33 33' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M8.50552 11.0128V9.69404C8.50552 5.32404 12.1438 1.78146 16.6319 1.78146C21.12 1.78146 24.7583 5.32404 24.7583 9.69404V11.0128H27.4671C28.2151 11.0128 28.8215 11.6032 28.8215 12.3316V28.1567C28.8215 28.8851 28.2151 29.4755 27.4671 29.4755H5.79673C5.04873 29.4755 4.44234 28.8851 4.44234 28.1567V12.3316C4.44234 11.6032 5.04873 11.0128 5.79673 11.0128H8.50552ZM26.1127 13.6503H7.15113V26.838H26.1127V13.6503ZM15.2775 21.21C14.4678 20.754 13.9231 19.9017 13.9231 18.9254C13.9231 17.4687 15.1358 16.2879 16.6319 16.2879C18.128 16.2879 19.3407 17.4687 19.3407 18.9254C19.3407 19.9017 18.796 20.754 17.9863 21.21V24.2004H15.2775V21.21ZM11.2143 11.0128H22.0495V9.69404C22.0495 6.7807 19.6239 4.41898 16.6319 4.41898C13.6398 4.41898 11.2143 6.7807 11.2143 9.69404V11.0128Z'
      fill='#1C1C1C'
    />
  </svg>
);

const Memo = memo(FrameIcon);
export { Memo as FrameIcon };