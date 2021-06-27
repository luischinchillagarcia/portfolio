
function DataGraph({classes}) {

  let styles = {height: 53, width: 80}

  return (
    <div className={classes}>
      <svg width="31" height="28" viewBox="0 0 31 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 27.7021C2 27.7021 6.42689 15.3246 10.8538 15.3246C15.2807 15.3246 15.2807 0.917969 19.7076 0.917969C24.1345 0.917969 28.5614 27.7021 28.5614 27.7021H2Z" fill="white"/>
        <line x1="2.05371" y1="26.748" x2="31.0001" y2="26.748" stroke="white" strokeWidth="2"/>
        <line x1="1.05371" y1="27.6973" x2="1.05371" y2="5.14984e-05" stroke="white" strokeWidth="2"/>
      </svg>
    </div>
  )
}

function Planet({classes}) {
  return (
    <div className={classes}>
      <svg width="37" height="34" viewBox="0 0 37 34" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="18.8345" cy="16.7686" r="8.35503" fill="white"/>
        <circle cx="31.3079" cy="6.56478" r="1.79036" fill="white"/>
        <path d="M34.1194 7.45128C34.321 7.80061 34.3027 8.40432 33.8022 9.34488C33.3162 10.2582 32.4436 11.3529 31.2292 12.5587C28.8057 14.9648 25.1042 17.7314 20.6976 20.2755C16.2911 22.8196 12.0443 24.642 8.74884 25.5377C7.09743 25.9866 5.71305 26.1949 4.67911 26.1591C3.61431 26.1223 3.08232 25.8363 2.88064 25.487C2.67896 25.1376 2.69726 24.5339 3.19777 23.5934C3.68377 22.6801 4.55636 21.5853 5.7708 20.3796C8.19427 17.9735 11.8958 15.2068 16.3024 12.6627C20.7089 10.1186 24.9557 8.29628 28.2512 7.40055C29.9026 6.95168 31.287 6.74337 32.3209 6.77913C33.3857 6.81595 33.9177 7.10196 34.1194 7.45128Z" stroke="white"/>
      </svg>
    </div>
  )
}

function Neuron({classes}) {
  return (
    <svg width="26" height="44" viewBox="0 0 26 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="4.83657" cy="38.692" r="4.83657" fill="white"/>
      <circle cx="4.83657" cy="21.7648" r="4.83657" fill="white"/>
      <circle cx="4.83754" cy="4.83657" r="4.83657" fill="white"/>
      <circle cx="20.3834" cy="29.0192" r="4.83657" fill="white"/>
      <circle cx="20.3834" cy="14.5099" r="4.83657" fill="white"/>
      <line x1="4.74267" y1="38.5441" x2="20.2888" y2="28.8709" stroke="white" strokeWidth="0.349394"/>
      <line x1="4.68801" y1="38.5979" x2="20.2341" y2="14.4151" stroke="white" strokeWidth="0.349394"/>
      <line x1="4.90884" y1="21.6063" x2="20.4549" y2="28.8612" stroke="white" strokeWidth="0.349394"/>
      <line x1="4.76108" y1="21.6063" x2="20.3072" y2="14.3515" stroke="white" strokeWidth="0.349394"/>
      <line x1="4.98191" y1="4.74196" x2="20.528" y2="28.9248" stroke="white" strokeWidth="0.349394"/>
      <line x1="4.92725" y1="4.6881" x2="20.4734" y2="14.3612" stroke="white" strokeWidth="0.349394"/>
    </svg>
  )
}

function Database({classes}) {
  return (
    <div className={classes}>
      <svg width="26" height="30" viewBox="0 0 26 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.731718" y="2.79275" width="23.6278" height="24.4147" stroke="white" strokeWidth="1.46344"/>
        <ellipse cx="12.5456" cy="27.9395" rx="12.5456" ry="2.06109" fill="white"/>
        <ellipse cx="12.5456" cy="19.4659" rx="12.5456" ry="2.06109" fill="white"/>
        <ellipse cx="12.5456" cy="10.7637" rx="12.5456" ry="2.06109" fill="white"/>
        <ellipse cx="12.5456" cy="2.06109" rx="12.5456" ry="2.06109" fill="white"/>
      </svg>
    </div>
  )
}

export {
  DataGraph,
  Planet,
  Neuron,
  Database,
}