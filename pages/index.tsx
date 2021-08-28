import { Layout } from 'components'
import type { NextPage } from 'next'
import { Banner, PrimaryButton } from 'styles'

const Home: NextPage = () => {
  return (
    <Layout>
      <Banner>
        <h1>Dev Sahaaya</h1>
        <p>Resources for Javascript Developers</p>
        <PrimaryButton>Resources</PrimaryButton>
      </Banner>
    </Layout>
  )
}

export default Home
