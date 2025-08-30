/* eslint no-bitwise: off */
import React from 'react';
import MuiAvatar from '@mui/material/Avatar';

const Avatar = ({
  src,
  name,
  width,
  className,
}) => {
  function getColorFromString(string) {
    let hash = 0;
    let i;

    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    const hue = Math.abs(hash % 360); // Keep the hue value within 0 to 360
    const saturation = 70; // Set fixed saturation/lightness value for lighter colors
    const lightness = 80;
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  }

  return (
    <div className={`text-palette-1 ${className}`}>
      {src ? (
        <MuiAvatar
          alt={`${name} avatar`}
          src={src}
          sx={{ width, height: width }}
        />
      ) : (
        <MuiAvatar
          alt={`${name} avatar`}
          sx={{
            width,
            height: width,
            bgcolor: getColorFromString(name),
          }}
        >
          <span>{name.split(' ').map((word) => word[0]).join('')}</span>
        </MuiAvatar>
      )}
    </div>
  );
};

export default Avatar;
