import Link from 'next/link'
import { Icons, IconAttributes } from '@/types'


function IconLink({ link, IconUI, useATag }: IconAttributes) {
  return (
    <>
      {
        !!useATag 
          ? <a href={ link } target="_blank" rel="noopener noreferrer"> { IconUI } </a>
          : <Link href={ link }> { IconUI } </Link>
      }
    </>
  )
}


function IconsWithLinks({ icons }: Icons) {
  return (
    <div className='flex justify-center gap-1 md:gap-4'>
      {
        icons.map((icon, key) => <IconLink key={key} link={ icon.link } useATag={icon.useATag} IconUI={ icon.IconUI } /> )
      }
    </div>
  )
}


export { IconsWithLinks }
