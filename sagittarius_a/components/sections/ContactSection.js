function ContactMe({ contactConfig }) {

  return (
    <div className="flex justify-center font-custom1 ExperienceSection">
      <div className="flex justify-center max-w-lg m-4 bg-gray-200 rounded-md bg-opacity-10">
        <Wrapper config={contactConfig} />
      </div>
    </div>
  )
}


function Wrapper({ config }) {
  return (
    <div className="mx-10 text-white my-7">
      <Content config={config} />
      <div className="flex justify-center gap-4">
        <Button text={config.button1.text} href={config.button1.href} />
        <Button text={config.button2.text} href={config.button2.href} />
      </div>
    </div>
  )
}


function Content({ config, dividerLength=2 }) {

  const divider = <div className="w-12 mx-auto mb-4 bg-white" style={{height: dividerLength + 'px'}} />

  return (
    <div className="flex flex-col justify-center gap-1 mx-4">
      <h1 className="text-lg font-semibold text-center">
        { config.title }
      </h1>
      { divider }
      <p className="mb-3 text-sm text-center">
        { config.body }
      </p>
    </div>
  )
}


function Button({ text, href }) {
  return (
    <a href={href}>
      <button className="px-3 py-1 border border-white rounded-xl">
        { text }
      </button>
    </a>
  )
}


export default ContactMe
