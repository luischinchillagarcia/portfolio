import { MarkdownBlock, CodeBlock } from '../../components/utilities/MarkdownComponents'
import ShowMoreDropdown from '../../components/utilities/ShowMoreDropdown'
import { getAllPostIds, getPostData } from '../../lib/posts'


function MarkdownSection({ content, contentConfig, hiddenContent }) {

  const hiddenBlock = <MarkdownBlock content={hiddenContent} contentConfig={contentConfig} />

  return (
    <>
      <MarkdownBlock content={content} contentConfig={contentConfig} />
      {hiddenContent && <ShowMoreDropdown contentMore={hiddenBlock} />}
    </>
  )
}


function CodeBlockSection({ content, contentConfig, hiddenContent }) {

  const hiddenBlock = <CodeBlock content={hiddenContent} contentConfig={contentConfig} />

  return (
    <>
      <CodeBlock content={content} contentConfig={contentConfig} />
      {hiddenContent && <ShowMoreDropdown contentMore={hiddenBlock} />}
    </>
  )
}


const sectionTypes = {
  markdown: (content, contentConfig, hiddenBlock) => <MarkdownSection content={content} contentConfig={contentConfig} hiddenContent={hiddenBlock} />,
  codeblock: (content, contentConfig, hiddenBlock) => <CodeBlockSection content={content} contentConfig={contentConfig} hiddenContent={hiddenBlock} />,
  image: (imScr, contentConfig) => <img src={imScr} alt={contentConfig.description} />
}


function CardLeft({ subsections }) {

  const subsectionsDisplay = subsections.map((subsection, index) => {
    const {leftSection: {contentType, classes, contentConfig, content}} = subsection
    const sectionFn = sectionTypes[contentType]
    return ( 
      <div key={'section' + index} className={classes}>
        { sectionFn(content.show, contentConfig, content.hidden) }
      </div> 
    )
  })

  const classes = {
    rounded: 'rounded-t-lg lg:rounded-l-lg lg:rounded-tr-none ',
    setup: 'w-full p-3 lg:w-1/2  ',
    color: 'text-white bg-white border lg:border-r-0 bg-opacity-10 border-opacity-10 border-b-0 lg:border-b ',
  }

  return (
    <div className={classes.rounded + classes.setup + classes.color}>
      { subsectionsDisplay }
    </div>
  )
}


function CardRight({ subsections }) {

  const subsectionsDisplay = subsections.map((subsection, index) => {
    const {rightSection: {contentType, classes, contentConfig, content}} = subsection
    const sectionFn = sectionTypes[contentType]
    return ( 
      <div key={'section' + index} className={classes}>
        { sectionFn(content.show, contentConfig, content.hidden) }
      </div> 
    )
  })

  const classes = {
    rounded: 'rounded-b-lg lg:rounded-r-lg lg:rounded-bl-none ',
    setup: 'w-full p-3 lg:w-1/2 ',
    color: 'text-white bg-black border border-opacity-10 lg:border-l-0 border-t-0 lg:border-t ',
  }

  return (
    <div className={classes.rounded + classes.setup + classes.color}>
      { subsectionsDisplay }
    </div>
  )
}


function CardsContainer({ section }) {

  return (
    <div className={'flex flex-col rounded-sm lg:flex-row '}>
      <CardLeft subsections={section.subsections} />
      <CardRight subsections={section.subsections} />
    </div>
  )
}


function BlogPage({ postData: {data: data} }) {

  return (
    <>
    <div className="flex flex-col w-full max-w-4xl gap-4 mx-auto lg:gap-0 font-custom1">
      <h1 className="p-4 mx-auto text-5xl text-white">
        { data.title }
      </h1>
      <h3 className="p-2 pb-20 mx-auto text-2xl text-white">
        { data.subtitle }
      </h3>
      {
        data.sections.map((section, index) => (
          <CardsContainer key={'blog-section-' + index} section={section} />
        ))
      }
    </div>
    </>
  )
}


export default BlogPage


export async function getStaticProps({ params }) {
  const postData = getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}


export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}
