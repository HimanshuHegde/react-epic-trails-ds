'use client'
// Example usage
import React from 'react';
import {BadgeList,BadgeListItem} from '../components/BadgeList';
import { Alert, Car, Shield } from '@/components/icons';
// import * as Icons from '../components/icons';


const ExampleUsage: React.FC = () => {
  return (
    <div className="p-6">
      <BadgeList>
        {/* Regular div badge */}
        <BadgeListItem
          icon={<Alert />}
          color="blue"
          size="normal"
        >
          <span>Normal badge with text</span>
        </BadgeListItem>
        
        {/* Anchor badge */}
        <BadgeListItem
          as="a"
          href="/transfer-protected"
          icon={<Car />}
          color="green"
        >
          <span className="font-bold">Transfer protected</span>
          <span> by the Kiwi.com Guarantee</span>
        </BadgeListItem>
        
        {/* Badge with mixed content */}
        <BadgeListItem
          icon={<Shield />}
          color="red"
          onClick={() => console.log('clicked')}
        >
          <a href="#link">This is a link</a>
          <span> and some regular text</span>
        </BadgeListItem>
      </BadgeList>
    </div>
  );
};

export default ExampleUsage;