const blackHoleConfigs = {
  outer: [
    { r: 1.0, opacity: 0.02, color: '#fefce6', classes: 'bh-shadow', style: {animationDelay: 0}  },
    { r: 0.8, opacity: 0.02, color: '#fefce6', classes: 'bh-shadow', style: {animationDelay: 0}  },
    { r: 0.7, opacity: 0.02, color: '#fefce6', classes: 'bh-shadow', style: {animationDelay: 0}  },
    { r: 0.6, opacity: 0.02, color: '#fefce6', classes: 'bh-shadow', style: {animationDelay: 0}  },
  ],
  inner: [
    // { r: 0.50, opacity: 0.2, color: '#fefce6', classes: 'bh-shadow ',        style: {animationDelay: 0} },
    // { r: 0.30, opacity: 0.2, color: '#fefce6', classes: 'bh-shadow ',        style: {animationDelay: 0} },
    { r: 0.50, opacity: 0.4, color: '#fefce6', classes: 'bh-shadow gravity', style: {animationDelay: 500 + 'ms'} },
    { r: 0.40, opacity: 0.4, color: '#fefce6', classes: 'bh-shadow gravity', style: {animationDelay: 300 + 'ms'} },
    { r: 0.26, opacity: 0.7, color: '#fefce6', classes: 'bh-shadow gravity', style: {animationDelay: 0   + 'ms'} },
  ],
  nucleus: [
    { r: .20, opacity: 1.0, color: 'black', classes: '', style: {}  },
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

function BlackHole({ size, classes, children, cssUnit='px' }) {
  
  const addUnit = (value) => `${Math.abs(value)}${cssUnit}`
  
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

  return (
    <div className={classes} style={{width: boxSizePos, height: boxSizePos}}>
      <div className="absolute left-0 w-full text-lg text-white bottom-60 md:bottom-32 ">
        { children }
      </div>
      <svg width={boxSizePos} height={boxSizePos} fill="none" xmlns="http://www.w3.org/2000/svg">
        { outerRingsDisplay }
        { innerRingsDisplay }
        { nucleusDisplay    }
      </svg>
    </div>
  )
}

export default BlackHole
