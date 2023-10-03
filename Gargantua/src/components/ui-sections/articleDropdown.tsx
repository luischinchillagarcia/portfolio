import Link from 'next/link'
import { HomeIcon, ArticleIcon } from '@/components/icons/icons'


function fileExtensionHandler(fileNames: string[]) {
  const removeFileExtensions = fileNames.map(fileName => fileName.replace(/\.[^/.]+$/, ""))
  const removeTestFiles = removeFileExtensions.filter(n => !n.startsWith('test'))

  const articleNames = ['home'].concat(removeTestFiles)
  return articleNames
}

function capitalizeWord(word: string) {
  const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1)
  return capitalizedWord
}

function articleLink(name: string) {
  const link = (name === 'home') ? "/" : `/projects/${name}`
  return link
}

function DisplayArticles({ fileNames }: { fileNames: string[] }) {
  const articleNames = fileExtensionHandler(fileNames)

  const articles = articleNames.map(name => {
    const splitWords = name.split('_')
    const reformattedName = splitWords.map(word => capitalizeWord(word)).join(' ')
    return { name, reformattedName, href: articleLink(name) }
  })

  return (
    <>
      <ul className='list-inside'>
        {
          articles.map(article => (
            <li key={article.name} className='pb-1 text-primary'> 
              <Link href={article.href} className='flex items-center flex-shrink-0'> 
                { (article.name === 'home') ? <HomeIcon className="w-4 h-4" /> : <ArticleIcon className="w-4 h-4" /> }
                <p className="pl-1.5">{ article.reformattedName }</p> 
              </Link> 
            </li>
          ))
        }
      </ul>
    </>
  )
}


function ArticleDropdown({ fileNames, className }: { fileNames: string[], className?: string }) {

  return (
  <div className={ "dropdown " + className }>
    <label tabIndex={0} className="m-1 btn">
      <ArticleIcon />
    </label>
    <div tabIndex={0} className="w-64 p-2 shadow dropdown-content card card-compact bg-base-300 text-primary">
      <div className="card-body">
        <p className="text-md">Project Links</p>
        <DisplayArticles fileNames={ fileNames } />
      </div>
    </div>
  </div>
  )
}


export { ArticleDropdown, DisplayArticles }
