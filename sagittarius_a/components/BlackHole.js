const blackHoleConfig = {
  outer4: {
    r: 1.0,
    opacity: 0.07
  },
  outer3: {
    r: 0.8,
    opacity: 0.08
  },
  outer2: {
    r: 0.6,
    opacity: 0.09
  },
  outer1: {
    r: 0.45,
    opacity: 0.1
  },
  inner3: {
    r: 0.35,
    opacity: 0.6
  },
  inner2: {
    r: 0.25,
    opacity: 0.65
  },
  inner1: {
    r: 0.15,
    opacity: 0.99
  },
  nucleus: {
    r: 0.10,
    opacity: 1.0
  },
}


function BlackHole({ size, classes, cssUnit='px' }) {

  let center = size / 2 
  let viewBox = "0 0 " + `${center}${cssUnit} ${center}${cssUnit}`
  let cc = center + cssUnit

  let totalSize = size  + cssUnit

  let get_r_and_opacity = (percent, opacity) => {
    const radius = percent * center + cssUnit

    return [radius, opacity]
  }
  let [outerRadius4, outerOpacity4] = get_r_and_opacity(  blackHoleConfig.outer4.r , blackHoleConfig.outer4.opacity )
  let [outerRadius3, outerOpacity3] = get_r_and_opacity(  blackHoleConfig.outer3.r , blackHoleConfig.outer3.opacity )
  let [outerRadius2, outerOpacity2] = get_r_and_opacity(  blackHoleConfig.outer2.r , blackHoleConfig.outer2.opacity )
  let [outerRadius1, outerOpacity1] = get_r_and_opacity(  blackHoleConfig.outer1.r , blackHoleConfig.outer1.opacity )
  let [innerRadius3, innerOpacity3] = get_r_and_opacity(  blackHoleConfig.inner3.r , blackHoleConfig.inner3.opacity )
  let [innerRadius2, innerOpacity2] = get_r_and_opacity(  blackHoleConfig.inner2.r , blackHoleConfig.inner2.opacity )
  let [innerRadius1, innerOpacity1] = get_r_and_opacity(  blackHoleConfig.inner1.r , blackHoleConfig.inner1.opacity )
  let [nucleusRadius, nucleusOpacity] = get_r_and_opacity(blackHoleConfig.nucleus.r, blackHoleConfig.nucleus.opacity)

  return (
    <div className={classes}>
      <svg width={totalSize} height={totalSize} viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx={cc} cy={cc} r={outerRadius4} fill="white" fill-opacity={outerOpacity4}/>
        <circle cx={cc} cy={cc} r={outerRadius3} fill="white" fill-opacity={outerOpacity3}/>
        <circle cx={cc} cy={cc} r={outerRadius2} fill="white" fill-opacity={outerOpacity2}/>
        <circle cx={cc} cy={cc} r={outerRadius1} fill="white" fill-opacity={outerOpacity1}/>
        <circle cx={cc} cy={cc} r={innerRadius3} fill="white" fill-opacity={outerOpacity4}/>
        <circle cx={cc} cy={cc} r={innerRadius1} fill="white" fill-opacity={outerOpacity4}/>
        <circle cx={cc} cy={cc} r={innerRadius3} fill="white" fill-opacity={innerOpacity3} className="delay-3 gravity"/>
        <circle cx={cc} cy={cc} r={innerRadius2} fill="white" fill-opacity={innerOpacity2} className="delay-2 gravity"/>
        <circle cx={cc} cy={cc} r={innerRadius1} fill="white" fill-opacity={innerOpacity1} className="delay-1 gravity"/>
        <circle cx={cc} cy={cc} r={nucleusRadius} fill="black" fill-opacity={nucleusOpacity}/>
      </svg>
    </div>
  )
}

export default BlackHole