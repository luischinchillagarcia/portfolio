const staticStarConfig = {
  outer4: {
    r: 1.0, opacity: 0.07
  },
  outer3: {
    r: 0.8, opacity: 0.05
  },
  outer2: {
    r: 0.6, opacity: 0.1
  },
  outer1: {
    r: 0.45, opacity: 0.15
  },
  inner3: {
    r: 0.35, opacity: 0.2
  },
  inner2: {
    r: 0.25, opacity: 0.25
  },
  inner1: {
    r: 0.15, opacity: 0.3
  },
  nucleus: {
    r: 0.10, opacity: 1.0
  },
}


function StaticStar({ size, classes, cssUnit='px'}) {

  let center = size / 2 

  let viewBox = "0 0 " + `${center}${cssUnit} ${center}${cssUnit}`
  let cc = center + cssUnit
  let boxSize = size  + cssUnit

  let get_r_and_opacity = (percent, opacity) => {
    const radius = percent * center + cssUnit
    return [radius, opacity]
  }

  let [outerRadius4, outerOpacity4] = get_r_and_opacity(  staticStarConfig.outer4.r , staticStarConfig.outer4.opacity )
  let [outerRadius3, outerOpacity3] = get_r_and_opacity(  staticStarConfig.outer3.r , staticStarConfig.outer3.opacity )
  let [outerRadius2, outerOpacity2] = get_r_and_opacity(  staticStarConfig.outer2.r , staticStarConfig.outer2.opacity )
  let [outerRadius1, outerOpacity1] = get_r_and_opacity(  staticStarConfig.outer1.r , staticStarConfig.outer1.opacity )
  let [innerRadius3, innerOpacity3] = get_r_and_opacity(  staticStarConfig.inner3.r , staticStarConfig.inner3.opacity )
  let [innerRadius2, innerOpacity2] = get_r_and_opacity(  staticStarConfig.inner2.r , staticStarConfig.inner2.opacity )
  let [innerRadius1, innerOpacity1] = get_r_and_opacity(  staticStarConfig.inner1.r , staticStarConfig.inner1.opacity )
  let [nucleusRadius, nucleusOpacity] = get_r_and_opacity(staticStarConfig.nucleus.r, staticStarConfig.nucleus.opacity)

  return (
    <div className={classes}>
      <svg width={boxSize} height={boxSize} viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx={cc} cy={cc} r={outerRadius4} fill="white" fill-opacity={outerOpacity4}/>
        <circle cx={cc} cy={cc} r={outerRadius3} fill="white" fill-opacity={outerOpacity3}/>
        <circle cx={cc} cy={cc} r={outerRadius2} fill="white" fill-opacity={outerOpacity2}/>
        <circle cx={cc} cy={cc} r={outerRadius1} fill="white" fill-opacity={outerOpacity1}/>
        <circle cx={cc} cy={cc} r={innerRadius3} fill="white" fill-opacity={innerOpacity3}/>
        <circle cx={cc} cy={cc} r={innerRadius2} fill="white" fill-opacity={innerOpacity2}/>
        <circle cx={cc} cy={cc} r={innerRadius1} fill="white" fill-opacity={innerOpacity1}/>
        <circle cx={cc} cy={cc} r={nucleusRadius} fill="white" fill-opacity={nucleusOpacity}/>
      </svg>
    </div>
  )
}

export default StaticStar