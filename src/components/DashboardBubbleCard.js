import React from 'react';
import PropTypes from 'prop-types';
import { BubblesIcon } from '../assets/icons';

const DashboardBubbleCard = ({ width, height, IconComponent, IconColor, IconWidth, IconHeight, number, status, price }) => {
  return (
    <div className="relative rounded-[28px] bg-white shadow-[0_0_10px_0_rgba(0,0,0,0.01)]" style={{ width, height }}>
      <div className="flex h-28">
        <IconComponent className="absolute top-8 left-8 " style={{ color: IconColor, width: IconWidth, height: IconHeight }}
        />
        <BubblesIcon />
      </div>

      {
        price ?
          <div className="flex flex-col ml-[21px]">
            <div className='flex flex-row justify-between items-end mr-[21px]'>
              <span className="font-gilroy font-normal text-4xl text-[#383874]">{number}</span>
              <div className='flex flex-row gap-x-1'>
                <span className='font-gilroy text-lg text-[#69789F]'>$</span>
                <span className='font-gilroy text-lg font-semibold text-[#69789F]'>{price}</span>
              </div>
            </div>
            <span className="font-gilroy font-semibold text-xs text-[#969FB6]">{status}</span>
          </div>
          :

          <div className="flex flex-col ml-[21px]">
            <span className="font-gilroy font-normal text-4xl text-[#383874]">{number}</span>
            <span className="font-gilroy font-semibold text-xs text-[#969FB6]">{status}</span>
          </div>
      }
    </div>
  );
};

DashboardBubbleCard.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  IconComponent: PropTypes.elementType.isRequired,
  number: PropTypes.any.isRequired,
  status: PropTypes.string.isRequired,
};

export default DashboardBubbleCard;
