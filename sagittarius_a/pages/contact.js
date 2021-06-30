function Content() {

  const divider = <div className="w-12 h-1 mx-auto mb-4 bg-white" />

  return (
    <div className="flex flex-col justify-center gap-1 mx-4">
      <h1 class="text-lg text-center font-semibold">
        Contact me 
      </h1>
      { divider }
      <p class="text-sm text-center mb-3">
        I'm always open for discussions, so feel free to contact me!
      </p>
    </div>
  )
}

function Button({ text }) {
  return (
    <button className="px-3 py-1 border border-white rounded-xl">
      { text }
    </button>
  )
}

function Wrapper() {
  return (
    <div className="mx-10 text-white my-7">
      <Content />
      <div className="flex justify-center gap-4">
        <Button text={'Email'} />
        <Button text={'Resume'} />
      </div>
    </div>
  )
}

function ContactMe() {

  return (
    <div className="flex justify-center font-custom1">
      <div className="flex justify-center max-w-lg m-4 bg-gray-200 bg-opacity-10">
        <Wrapper />
      </div>
    </div>
  )
}

export default ContactMe