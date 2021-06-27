const staticStarConfig = {
  outer4: {
    r: 1.0, opacity: 0.01
  },
  outer3: {
    r: 0.8, opacity: 0.03
  },
  outer2: {
    r: 0.6, opacity: 0.05
  },
  outer1: {
    r: 0.45, opacity: 0.08
  },
  inner3: {
    r: 0.35, opacity: 0.09
  },
  inner2: {
    r: 0.25, opacity: 0.1
  },
  inner1: {
    r: 0.15, opacity: 0.15
  },
  nucleus: {
    r: 0.10, opacity: 1.0
  },
}


function StaticStar({ size, classes, cssUnit='px', left=0, top=0, opacity=1.0 }) {

  const center = size / 2 
  const cc = center + cssUnit
  const boxSize = size  + cssUnit

  const get_r_and_opacity = (percent, opacity) => {
    const radius = percent * center + cssUnit
    return [radius, opacity]
  }

  const [outerRadius4, outerOpacity4] = get_r_and_opacity(  staticStarConfig.outer4.r , staticStarConfig.outer4.opacity )
  const [outerRadius3, outerOpacity3] = get_r_and_opacity(  staticStarConfig.outer3.r , staticStarConfig.outer3.opacity )
  const [outerRadius2, outerOpacity2] = get_r_and_opacity(  staticStarConfig.outer2.r , staticStarConfig.outer2.opacity )
  const [outerRadius1, outerOpacity1] = get_r_and_opacity(  staticStarConfig.outer1.r , staticStarConfig.outer1.opacity )
  const [innerRadius3, innerOpacity3] = get_r_and_opacity(  staticStarConfig.inner3.r , staticStarConfig.inner3.opacity )
  const [innerRadius2, innerOpacity2] = get_r_and_opacity(  staticStarConfig.inner2.r , staticStarConfig.inner2.opacity )
  const [innerRadius1, innerOpacity1] = get_r_and_opacity(  staticStarConfig.inner1.r , staticStarConfig.inner1.opacity )
  const [nucleusRadius, nucleusOpacity] = get_r_and_opacity(staticStarConfig.nucleus.r, staticStarConfig.nucleus.opacity)

  
  let wrapperStyling = {
    width: boxSize, 
    height: boxSize, 
    opacity,
  }

  if (left !== null && top !== null ) {
    wrapperStyling = {
      ...wrapperStyling, 
      left: left + '%', 
      top: top + '%',
    }
  }

  const outerRings = [
    {r: outerRadius4, opacity: outerOpacity4, color: 'white', classes: 'bh-shadow'},
    {r: outerRadius3, opacity: outerOpacity3, color: 'white', classes: 'bh-shadow'},
    {r: outerRadius2, opacity: outerOpacity2, color: 'white', classes: 'bh-shadow'},
    {r: outerRadius1, opacity: outerOpacity1, color: 'white', classes: 'bh-shadow'},
  ]
  const innerRings = [
    {r: innerRadius3, opacity: innerOpacity3, color: 'white', classes: 'bh-shadow'},
    {r: innerRadius2, opacity: innerOpacity2, color: 'white', classes: 'bh-shadow'},
    {r: innerRadius1, opacity: innerOpacity1, color: 'white', classes: 'bh-shadow'},
  ]

  const outerRingsDisplay = outerRings.map((config, index) => (
    <circle key={index} cx={cc} cy={cc} r={config.r} fill={config.color} fillOpacity={config.opacity} className={config.classes}/>
  ))

  const innerRingsDisplay = innerRings.map((config, index) => (
    <circle key={index} cx={cc} cy={cc} r={config.r} fill={config.color} fillOpacity={config.opacity} className={config.classes}/>
  ))

  const nucleusDisplay = <circle cx={cc} cy={cc} r={nucleusRadius} fill="white" fillOpacity={nucleusOpacity}/>

  return (
    <div className={classes} style={wrapperStyling}>
      <svg width={boxSize} height={boxSize} fill="none" xmlns="http://www.w3.org/2000/svg">
        { outerRingsDisplay }
        { innerRingsDisplay }
        { nucleusDisplay }
      </svg>
    </div>
  )
}

export default StaticStar