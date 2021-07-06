import DefaultSection from '../components/utilities/DefaultBlock'


const inProgressConfig = {
  text: 'This project is under construction and will be completed soon!',
  button: 'Back to Home',
  route: '/',
}

function InProgressPage() {

  return (
    <DefaultSection config={inProgressConfig} />
  )
}

export default InProgressPage