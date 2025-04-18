'use client'
// Example usage
import React, { useState } from 'react';
import {BadgeList,BadgeListItem} from '../components/BadgeList';
import { Alert, Car, Shield } from '@/components/icons';
import {RadioGroup} from '@/components/RadioGroup/RadioGroup';
import { CheckBox } from '@/components/CheckBox';
import { ChoiceGroup } from '@/components/ChoiceGroup';
import { Badge } from '@/components/Badge';
import { Collapse } from '@/components/Collapse';
import Coupon from '@/components/Coupon/Coupon';
import { Dialogue } from '@/components/Dialogue';
import { RectButton } from '@/components/Button';
import { Drawer } from '@/components/drawer';
import { NormalInput } from '@/components/Input';
// import * as Icons from '../components/icons';


const ExampleUsage: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
    
    <ChoiceGroup label="Checkbox Group">
      <CheckBox name="checkbox" info="This is a checkbox" label="Checkbox" error disabled />
      <CheckBox name="checkbox" label="Checkbox" disabled />
      <CheckBox name="checkbox" label="Checkbox"  onChange={()=>{alert('sf')}}/>
    </ChoiceGroup>
    <Badge size='sm'> hi</Badge>
    <Collapse  label='hello every one' expanded={false} actionFunction={()=>{alert('hi')}} actionButtonLabel="hi" >
    <div>hi</div>
    <div>hi</div>
    </Collapse>
    <Collapse  label='hello every one' expanded={false} actionFunction={()=>{alert('hi')}} actionButtonLabel="hi" >
    <div>hi</div>
    <div>hi</div>
    </Collapse>
    <div className='h-20'></div>
    <Coupon label='Sale'size='large' theme='secondary'/>

    {/* <Dialogue  title='hello' description='hi'  image={<img src="https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?cs=srgb&dl=pexels-pixabay-210019.jpg&fm=jpg"/>} imagePosition='down'>
      <RectButton>Cancel</RectButton>
      <RectButton background={'#b91919'}>Logout</RectButton>
    </Dialogue> */}

      <Drawer
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        position="bottom"
        size="md"
        title="Settings"
      >
        <Collapse  label='hello every one' expanded={false} actionFunction={()=>{alert('hi')}} actionButtonLabel="hi" >
    <div>hi</div>
    <div>hi</div>
    </Collapse>
    <Collapse  label='hello every one' expanded={false} actionFunction={()=>{alert('hi')}} actionButtonLabel="hi" >
    <div>hi</div>
    <div>hi</div>
    </Collapse>
      </Drawer>

      <NormalInput type='date' Size={'fit'}/>
    </>

    
    

    
  );
};

export default ExampleUsage;