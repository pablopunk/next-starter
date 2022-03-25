import { FunctionComponent } from 'react'

type Props = {}

const Index: FunctionComponent<Props> = () => (
  <div>
    <div className="flex gap-1">
      <div className="w-5 border-b-8 border-fg"></div>
      <div className="w-8 border-b-8 border-accent"></div>
      <div className="w-14 border-b-8 border-accent2"></div>
    </div>
    <h1 className="text-3xl">Index page</h1>
    <p>Go ahead and edit the code</p>
  </div>
)

export default Index
