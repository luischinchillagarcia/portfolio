const blackHoleConfig = {
  outer4: {
    r: 1.0,
    opacity: 0.02
  },
  outer3: {
    r: 0.80,
    opacity: 0.02
  },
  outer2: {
    r: 0.70,
    opacity: 0.02
  },
  outer1: {
    r: 0.60,
    opacity: 0.02
  },
  inner3: {
    r: 0.50,
    opacity: 0.2
  },
  inner2: {
    r: 0.40,
    opacity: 0.2
  },
  inner1: {
    r: 0.30,
    opacity: 0.2
  },
  nucleus: {
    r: 0.20,
    opacity: 1.0
  },
}


function BlackHole({ size, classes, cssUnit='px' }) {

  const center = size / 2 
  const cc = center + cssUnit
  const boxSize = size  + cssUnit

  const get_r_and_opacity = (percent, opacity) => {
    const radius = percent * center + cssUnit
    return [radius, opacity]
  }

  const [outerRadius4, outerOpacity4] = get_r_and_opacity(  blackHoleConfig.outer4.r , blackHoleConfig.outer4.opacity )
  const [outerRadius3, outerOpacity3] = get_r_and_opacity(  blackHoleConfig.outer3.r , blackHoleConfig.outer3.opacity )
  const [outerRadius2, outerOpacity2] = get_r_and_opacity(  blackHoleConfig.outer2.r , blackHoleConfig.outer2.opacity )
  const [outerRadius1, outerOpacity1] = get_r_and_opacity(  blackHoleConfig.outer1.r , blackHoleConfig.outer1.opacity )
  const [innerRadius3, innerOpacity3] = get_r_and_opacity(  blackHoleConfig.inner3.r , blackHoleConfig.inner3.opacity )
  const [innerRadius2, innerOpacity2] = get_r_and_opacity(  blackHoleConfig.inner2.r , blackHoleConfig.inner2.opacity )
  const [innerRadius1, innerOpacity1] = get_r_and_opacity(  blackHoleConfig.inner1.r , blackHoleConfig.inner1.opacity )
  const [nucleusRadius, nucleusOpacity] = get_r_and_opacity(blackHoleConfig.nucleus.r, blackHoleConfig.nucleus.opacity)

  const outerRings = [
    {r: outerRadius4, opacity: outerOpacity4, color: '#fefce6', classes: 'bh-shadow'},
    {r: outerRadius3, opacity: outerOpacity3, color: '#fefce6', classes: 'bh-shadow'},
    {r: outerRadius2, opacity: outerOpacity2, color: '#fefce6', classes: 'bh-shadow'},
    {r: outerRadius1, opacity: outerOpacity1, color: '#fefce6', classes: 'bh-shadow'},
  ]
  const innerRings = [
    {r: innerRadius3, opacity: outerOpacity4, color: '#fefce6', classes: 'bh-shadow gravity', style: {animationDelay: 3} },
    {r: innerRadius1, opacity: outerOpacity4, color: '#fefce6', classes: 'bh-shadow gravity', style: {animationDelay: 3} },
    {r: innerRadius3, opacity: innerOpacity3, color: '#fefce6', classes: 'bh-shadow gravity', style: {animationDelay: 3} },
    {r: innerRadius2, opacity: innerOpacity2, color: '#fefce6', classes: 'bh-shadow gravity', style: {animationDelay: 2} },
    {r: innerRadius1, opacity: innerOpacity1, color: '#fefce6', classes: 'bh-shadow gravity', style: {animationDelay: 1} },
  ]

  const outerRingsDisplay = outerRings.map((config, index) => (
    <circle key={index} cx={cc} cy={cc} r={config.r} fill={config.color} fillOpacity={config.opacity} className={config.classes} style={config.style}/>
  ))

  const innerRingsDisplay = innerRings.map((config, index) => (
    <circle key={index} cx={cc} cy={cc} r={config.r} fill={config.color} fillOpacity={config.opacity} className={config.classes} style={config.style}/>
  ))

  return (
    <div className={classes} style={{width: boxSize, height: boxSize}}>
      <svg width={boxSize} height={boxSize} fill="none" xmlns="http://www.w3.org/2000/svg">
        { outerRingsDisplay }
        { innerRingsDisplay }
        <circle cx={cc} cy={cc} r={nucleusRadius} fill="black" fillOpacity={nucleusOpacity}/>
      </svg>
    </div>
  )
}

export default BlackHole