import { fetcher, url } from '../utils/util'

const Page = ({ data }) => {
  return (
    <div title="about">
      <h2>this is about page</h2>
    </div>
  )
}

Page.getInitialProps = async ({ query }) => {
  const { page } = query
  const data = await fetcher(`${url}/api/page/${page}`)
  return { data }
}

export default Page
