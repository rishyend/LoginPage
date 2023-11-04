import { memo, SVGProps } from 'react';

const Rectangle7Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 493 69' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0 16C0 7.16345 7.16344 0 16 0H477C485.837 0 493 7.16344 493 16V52.5757C493 61.4123 485.837 68.5757 477 68.5757H16C7.16345 68.5757 0 61.4123 0 52.5757V16Z'
      fill='#F0EDFF'
      fillOpacity={0.8}
    />
  </svg>
);

const Memo = memo(Rectangle7Icon);
export { Memo as Rectangle7Icon };
