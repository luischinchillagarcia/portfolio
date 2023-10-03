type NavBarType = {
  left?: React.ReactNode
  middle?: React.ReactNode
  right?: React.ReactNode
}

function NavBar({ left, middle, right }: NavBarType) {
  return (
    <div className="sticky top-0 z-50 px-5 bg-opacity-100 navbar bg-base-200">
      <div className="navbar-start">
        { left }
      </div>
      <div className="hidden navbar-center md:flex">
        { middle }
      </div>
      <div className="navbar-end">
        { right }
      </div>
    </div>
  )
}

export { NavBar }
