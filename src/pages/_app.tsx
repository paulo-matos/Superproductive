import '../styles/global.css'

import { ChallengesContext, ChallengesProvider } from '../contexts/ChallengesContext'
import { useState } from 'react'

function MyApp({ Component, pageProps }) {
  

  return (
    <ChallengesProvider> 
      {/* all elements inside Provider tag have access to the data inside this context */}
      <Component {...pageProps} />
    </ChallengesProvider>
  )
}

export default MyApp
