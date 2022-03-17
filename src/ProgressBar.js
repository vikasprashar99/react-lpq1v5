import React from 'react';

const ProgressBar = ({ completed, bgColor }) => {
  const containerStyles = {
    height: 20,
    width: '100%',
    backgroundColor: '#e0e0de',
    borderRadius: 50,
    marginTop: 30,
    marginBottom: 20,
  };

  const fillerStyles = {
    height: '100%',
    width: `${completed}%`,
    backgroundColor: `${bgColor}`,
    borderRadius: 'inherit',
    textAlign: 'right',
  };

  const labelStyles = {
    padding: 5,
    color: 'white',
    fontWeight: 'bold',
  };

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span style={labelStyles}>{`${completed}%`}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
