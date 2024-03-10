import { Select } from 'antd';
import React from 'react';

export default function LocationFilter() {
  const customLabelStyle = {
    color: 'gray',
    fontSize: '15px',
  };
  return (
    <div className='flex'>
      <svg
        width='25px'
        height='25px'
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g id='SVGRepo_bgCarrier' strokeWidth={0} />
        <g
          id='SVGRepo_tracerCarrier'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <g id='SVGRepo_iconCarrier'>
          {' '}
          <path
            d='M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z'
            stroke='#eeeeee'
            strokeWidth={2}
            strokeLinecap='round'
            strokeLinejoin='round'
          />{' '}
          <path
            d='M12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12Z'
            stroke='#eeeeee'
            strokeWidth={2}
            strokeLinecap='round'
            strokeLinejoin='round'
          />{' '}
        </g>
      </svg>
      <Select
        defaultValue=''
        style={{ width: 250 }}
        options={[
          { value: '', label: 'Tất cả địa điểm', style: customLabelStyle },
          {
            value: 'hochiminh',
            label: 'Hồ Chí Minh',
            style: customLabelStyle,
          },
          { value: 'hanoi', label: 'Hà Nội', style: customLabelStyle },
          {
            value: 'another',
            label: 'Các địa điểm khác',
            style: customLabelStyle,
          },
        ]}
      />
    </div>
  );
}