import { useState } from 'react'

import ComponentA from './components/componentA'

function App() {
  const [user] = useState({
    username: 'timk',
    firstName: 'tim',
    lastName: 'kellogg'
  })

  return (
    <div>
      <ComponentA user={user} />
    </div>
  )
}

export default App