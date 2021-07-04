import DefaultSection from '../components/utilities/defaultPages'


const inProgressConfig = {
  text: '404. Our team of ominent AI machines are working to get things back up again!',
  button: 'Back to Home',
  route: '/',
}

function InProgressPage() {

  return (
    <DefaultSection config={inProgressConfig} />
  )
}

export default InProgressPage