const blackHoleConfigs = {
  outer: [
    { r: 1.00, opacity: 0.01, color: 'white', classes: 'bh-shadow ', style: {animationDelay: 0}  },
    { r: 0.80, opacity: 0.03, color: 'white', classes: 'bh-shadow ', style: {animationDelay: 0}  },
    { r: 0.60, opacity: 0.05, color: 'white', classes: 'bh-shadow ', style: {animationDelay: 0}  },
    { r: 0.45, opacity: 0.08, color: 'white', classes: 'bh-shadow ', style: {animationDelay: 0}  },
  ],
  inner: [
    { r: 0.35, opacity: 0.09, color: 'white', classes: 'bh-shadow ', style: {animationDelay: 3} },
    { r: 0.25, opacity: 0.10, color: 'white', classes: 'bh-shadow ', style: {animationDelay: 2} },
    { r: 0.15, opacity: 0.15, color: 'white', classes: 'bh-shadow ', style: {animationDelay: 1} },
  ],
  nucleus: [
    { r: 0.10, opacity: 1.0, color: 'white', classes: '', style: {}  },
  ],
}

function CreateRings({ ringsConfigs, centerPos, center, addUnit, keyPrefix }) {
  
  const updatedRingsConfigs = ringsConfigs.map((config) => (
    { ...config,  r: addUnit(config.r * center) }
  ))

  const ringsDisplay = (
    updatedRingsConfigs.map((config, index) => (
      <circle 
        key={keyPrefix + '-' + index} 
        cx={centerPos} cy={centerPos} r={config.r} fillOpacity={config.opacity} fill={config.color} className={config.classes} style={config.style}
      />
    ))
  )

  return (
    <>
      { ringsDisplay }
    </>
  )
}

function StaticStar2({ size, classes, cssUnit='px', left=0, top=0, opacity=1.0 }) {
  
  const addUnit = (value) => `${value}${cssUnit}`
  
  const center = size / 2 
  const centerPos = addUnit(center)
  const boxSizePos = addUnit(size)


  let { outer: outerRingsConfigs, inner: innerRingsConfigs, nucleus: nucleusConfigs} = blackHoleConfigs

  const outerRingsDisplay = (
    <CreateRings ringsConfigs={outerRingsConfigs} centerPos={centerPos} center={center} addUnit={addUnit} keyPrefix={'bhOuterRings'} />
  )
  const innerRingsDisplay = (
    <CreateRings ringsConfigs={innerRingsConfigs} centerPos={centerPos} center={center} addUnit={addUnit} keyPrefix={'bhInnerRings'} />
  )
  const nucleusDisplay    = (
    <CreateRings ringsConfigs={ nucleusConfigs  } centerPos={centerPos} center={center} addUnit={addUnit} keyPrefix={'bhNucleus'} />
  )

  let wrapperStyling = {
    width: boxSizePos, 
    height: boxSizePos, 
    left: left + '%', 
    top: top + '%',
    opacity,
  }

  return (
    <div className={classes} style={wrapperStyling}>
      <svg width={boxSizePos} height={boxSizePos} fill="none" xmlns="http://www.w3.org/2000/svg">
        { outerRingsDisplay }
        { innerRingsDisplay }
        { nucleusDisplay }
      </svg>
    </div>
  )
}


export default StaticStar2
