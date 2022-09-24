import { MdHomeWork, MdFace, MdLibraryBooks } from 'react-icons/md'
import { HiTerminal } from 'react-icons/hi'
import { FaArrowRight } from 'react-icons/fa'
import { Card } from '../components/Card'

export default function Index() {
  return (
    <div className="flex items-center justify-center md:min-h-[100vh] p-3">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card title="Work" buttonText="More" Icon={MdHomeWork}>
          I work at <b>Maze</b> as full-stack developer.
        </Card>
        <Card title="Me" buttonText="Bio" Icon={MdFace} secondary>
          I live and work remotely from <b>Pontevedra, Galiza</b>.
        </Card>
        <Card title="Code" buttonText="Go" Icon={HiTerminal} secondary>
          All of my personal projects and open-source contributions can be found
          on <b>Github</b>.
        </Card>
        <Card title="Blog" buttonText="All posts" Icon={MdLibraryBooks}>
          <div className="flex flex-col gap-1">
            <div className='flex gap-1 items-center'>
              <FaArrowRight />
              <span>How to create a real-time UI in NextJS</span>
            </div>
            <div className='flex gap-1 items-center'>
              <FaArrowRight />
              <span>How the M1 Macbook Air saved me money</span>
            </div>
            <div className='flex gap-1 items-start'>
              <FaArrowRight className='w-[25px] mt-1' />
              <span>The best camera that fits in your pocket is not your smartphone</span>
            </div>
          </div>
        </Card>
      </div >
    </div >
  )
}
