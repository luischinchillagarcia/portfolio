interface IconType {
  className?: string,
}

function EmailIcon({ className }: IconType) {
  return (
    <>
      <svg className={ 'stroke-0 ' + className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M.026 24l11.974-11.607 11.974 11.607h-23.948zm11.964-23.961l-11.99 8.725v12.476l7.352-7.127-5.653-4.113 10.291-7.488 10.309 7.488-5.655 4.108 7.356 7.132v-12.476l-12.01-8.725z" fill="currentColor" stroke="currentColor"/></svg>
    </>
  )
}


function LinkedInIcon({ className }: IconType) {
  return (
    <>
      <svg className={ 'stroke-0 ' + className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0v24h24v-24h-24zm8 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.397-2.586 7-2.777 7 2.476v6.759z" fill="currentColor" stroke="currentColor"/></svg>
    </>
  )
}


function GithubIcon({ className }: IconType) {
  return (
    <>
      <svg className={ 'stroke-0 ' + className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0v24h24v-24h-24zm14.534 19.59c-.406.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.311-1.588-.824-2.147.083-.202.357-1.016-.079-2.117 0 0-.671-.215-2.198.82-.639-.18-1.323-.267-2.003-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z" fill="currentColor" stroke="currentColor"/></svg>
    </>
  )
}


function BunnyIcon({ className }: IconType) {
  return (
    <>
      <svg className={ 'stroke-0 ' + className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.983 10.232c.139.49-.186 1.014-.729 1.169-.542.154-1.094-.119-1.235-.61-.14-.491.187-1.014.729-1.168.543-.155 1.094.118 1.235.609zm12.017 10.781c0 1.655-1.317 2.987-3.281 2.987h-10.781c-3.07 0-3.656-3.875-1.266-4.75-.63-.792-.806-1.903-.427-3.303.298-1.107.024-1.292-.708-1.784-.588-.396-1.537-1.033-1.537-2.372 0-1.825 1.422-4.241 3.85-5.261 1.375-.578 1.815-1.397 2.422-2.53.271-.506.578-1.079.995-1.659 1.389-1.935 2.699-2.341 3.554-2.341.73 0 1.408.296 1.91.833.273.292.478.639.604 1.011.869.179 1.564.702 1.924 1.475.469 1.008.275 2.254-.507 3.253-.425.543-.999 1.05-1.606 1.586-.828.732-1.963 1.734-1.918 2.343.021.288.375.67.969 1.05 2.627 1.681 4.061 3.909 4.373 6.799.914.691 1.43 1.659 1.43 2.663zm-2.836-1.219c-.286-.166-.473-.47-.493-.808-.146-2.372-1.46-4.582-3.637-5.837-1.143-.659-1.676-1.553-1.746-2.495-.121-1.619 1.318-2.891 2.59-4.013.537-.475 1.046-.924 1.359-1.324.75-.96.121-1.679-.664-1.447-1.072.317-2.451 2.013-3.135 2.739.605-.793 1.709-2.456 2.015-3.448.294-.958-.437-1.57-1.493-.823-.866.613-1.484 1.695-1.982 2.626-.679 1.264-1.379 2.571-3.391 3.417-1.648.693-3.516 3.078-1.984 4.107.668.449 1.7 1.143 1.7 2.736 0 1.001-.958 2.541.683 4.572-2.314.485-2.048 2.204-1.071 2.204h2.144c-.499-1.581.271-3.521 2.192-3.521-.08-1.008.084-3.25 3.125-4.292-3.291 2.458-.838 6.119.396 6.729-1.236-.478-2.069-.712-2.631-.765-1.592-.148-1.548 1.849-.364 1.849h5.942c1.551 0 1.814-1.413.445-2.206z" fill="currentColor" stroke="currentColor" /></svg>
    </>
  )
}


function ResumeIcon({ className }: IconType) {
  return (
    <>
      <svg className={ 'stroke-0 ' + className} width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M3 24h19v-23h-1v22h-18v1zm17-24h-18v22h18v-22zm-3 17h-12v1h12v-1zm0-3h-12v1h12v-1zm0-3h-12v1h12v-1zm-7.348-3.863l.948.3c-.145.529-.387.922-.725 1.178-.338.257-.767.385-1.287.385-.643 0-1.171-.22-1.585-.659-.414-.439-.621-1.04-.621-1.802 0-.806.208-1.432.624-1.878.416-.446.963-.669 1.642-.669.592 0 1.073.175 1.443.525.221.207.386.505.496.892l-.968.231c-.057-.251-.177-.449-.358-.594-.182-.146-.403-.218-.663-.218-.359 0-.65.129-.874.386-.223.258-.335.675-.335 1.252 0 .613.11 1.049.331 1.308.22.26.506.39.858.39.26 0 .484-.082.671-.248.187-.165.322-.425.403-.779zm3.023 1.78l-1.731-4.842h1.06l1.226 3.584 1.186-3.584h1.037l-1.734 4.842h-1.044z" fill="currentColor" stroke="currentColor" /></svg>
    </>
  )
}


function DownArrowIcon({ className }: IconType) {
  return (
    <>
      <svg className={ 'stroke-0 ' + className} width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M11 21.883l-6.235-7.527-.765.644 7.521 9 7.479-9-.764-.645-6.236 7.529v-21.884h-1v21.883z" fill="currentColor" stroke="currentColor" /></svg>
    </>
  )
}


function UpArrowIcon({ className }: IconType) {
  return (
    <>
      <svg className={ 'stroke-0 ' + className} width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M11 2.206l-6.235 7.528-.765-.645 7.521-9 7.479 9-.764.646-6.236-7.53v21.884h-1v-21.883z" fill="currentColor" stroke="currentColor" /></svg>
    </>
  )
}


function HomeIcon({ className }: IconType) {
  return (
    <>
      <svg className={ 'stroke-0 ' + className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 7.093v-5.093h-3v2.093l3 3zm4 5.907l-12-12-12 12h3v10h7v-5h4v5h7v-10h3zm-5 8h-3v-5h-8v5h-3v-10.26l7-6.912 7 6.99v10.182z" fill="currentColor" stroke="currentColor"/></svg>
    </>
  )
}


function ArticleIcon({ className }: IconType) {
  return (
    <>
      <svg className={ "stroke-0  " + className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11.362 2c4.156 0 2.638 6 2.638 6s6-1.65 6 2.457v11.543h-16v-20h7.362zm.827-2h-10.189v24h20v-14.386c0-2.391-6.648-9.614-9.811-9.614zm4.811 13h-3v-1h3v1zm0 2h-3v1h3v-1zm0 3h-10v1h10v-1zm-5-6h-5v4h5v-4z" fill="currentColor" stroke="currentColor"/></svg>
    </>
  )
}


export { EmailIcon, LinkedInIcon, GithubIcon, BunnyIcon, ResumeIcon, DownArrowIcon, UpArrowIcon, HomeIcon, ArticleIcon }
