import React from 'react';


const ColourSelector = (props) => {
  const { config, selectNextBackground } = props
  const { background } = config;
  return (
    <button  onClick={() => selectNextBackground({background: background})} className={config.className} style={{backgroundColor: config.background}}>
      {config.label}
    </button>
  )
}
export default ColourSelector;
