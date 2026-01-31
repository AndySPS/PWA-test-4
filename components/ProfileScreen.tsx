
import React, { useState } from 'react';
import { useTheme } from '../theme/ThemeConfig';

export const ProfileScreen: React.FC = () => {
  const theme = useTheme();
  const [firstName, setFirstName] = useState('John');
  const [lastName, setLastName] = useState('Doe');

  // Logic to determine if button is enabled (in image it looks disabled/inactive)
  const isModified = firstName !== 'John' || lastName !== 'Doe';

  return (
    <div className="flex flex-col w-full h-full px-4 pt-8">
      <div className="flex flex-col gap-6">
        {/* First Name Input */}
        <div className="relative">
          <label 
            className="absolute -top-2.5 left-3 px-1 bg-white z-10"
            style={{ 
              fontSize: theme.typography.label.medium.fontSize,
              color: theme.colors.surface.onVariant
            }}
          >
            First name
          </label>
          <div 
            className="w-full h-14 rounded-md border flex items-center px-4"
            style={{ borderColor: theme.colors.outline }}
          >
            <input 
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full bg-transparent outline-none"
              style={{ 
                fontSize: theme.typography.body.large.fontSize,
                color: theme.colors.surface.on
              }}
            />
          </div>
        </div>

        {/* Last Name Input */}
        <div className="relative">
          <label 
            className="absolute -top-2.5 left-3 px-1 bg-white z-10"
            style={{ 
              fontSize: theme.typography.label.medium.fontSize,
              color: theme.colors.surface.onVariant
            }}
          >
            Last name
          </label>
          <div 
            className="w-full h-14 rounded-md border flex items-center px-4"
            style={{ borderColor: theme.colors.outline }}
          >
            <input 
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full bg-transparent outline-none"
              style={{ 
                fontSize: theme.typography.body.large.fontSize,
                color: theme.colors.surface.on
              }}
            />
          </div>
        </div>

        {/* Save Changes Button */}
        <button 
          className="w-full h-12 mt-4 rounded-full font-medium transition-colors"
          style={{ 
            backgroundColor: isModified ? theme.colors.primary.base : '#E1E2E4',
            color: isModified ? theme.colors.primary.on : '#939393'
          }}
          disabled={!isModified}
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};
