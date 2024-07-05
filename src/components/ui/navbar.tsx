"use client"
import MySimpleBtn from '@/utils/mySimpleBtn';
import React from 'react';
import { IconType } from 'react-icons';
import { GrWorkshop } from "react-icons/gr";
import { MdElectricalServices, MdContactSupport } from "react-icons/md";

interface Icons {
  id: number;
  iconName: IconType;
  text: string;
}

const icons: Icons[] = [
  { id: 1, iconName: GrWorkshop, text: "Home" },
  { id: 2, iconName: MdElectricalServices, text: "Services" },
  { id: 3, iconName: MdContactSupport, text: "Contact" },
];

const Navbar: React.FC = () => {
  return (
    <div className=' fixed top-2 md:top-10 inset-x-0 max-w-lg w-full bg-black  h-16 flex items-center justify-center rounded-3xl mx-auto z-50 border text-neutral-300'>
      <div className='flex '>
        {icons.map(icon => (
          <MySimpleBtn
            LeftIcon={icon.iconName}
            text={icon.text}
            key={icon.id}
            onClick={() => console.log(`${icon.text} clicked`)}
            className='bg-transparent hover:bg-transparent'
            // useHover = {true} later on turn it true
          />
        ))}
      </div>
    </div>
  );
};

export default Navbar;
