import { Icon } from '@iconify/react'

export default function Footer() {
    return <div className='flex justify-center mb-20'>
      <div className='flex gap-2 sm:gap-4'>
        <div className="box_shadow">
          <div className='rounded-xl p-4 bg-gray-200 relative z-10'>
            <a href="http://twitter.com/0xSchwap" rel="noreferrer" target="_blank">
              <Icon icon="mdi:twitter" width="30" color="gray" />
            </a>
          </div>
        </div>
        <div className="box_shadow">
          <div className='rounded-xl p-4 bg-gray-200 relative z-10'>
            <a href="http://twitter.com/0xSchwap" rel="noreferrer" target="_blank">
              <Icon icon="ic:baseline-discord" width="30" color="gray" />
            </a>
          </div>
        </div>
        <div className="box_shadow">
          <div className='rounded-xl p-4 bg-gray-200 relative z-10'>
            <a href="http://twitter.com/0xSchwap" rel="noreferrer" target="_blank">
              <Icon icon="simple-icons:substack" width="30" color="gray" />
            </a>
          </div>
        </div>
        <div className="box_shadow">
          <div className='rounded-xl p-4 bg-gray-200 relative z-10'>
            <a href="http://twitter.com/0xSchwap" rel="noreferrer" target="_blank">
              <Icon icon="simple-icons:gitbook" width="30" color="gray" />
            </a>
          </div>
        </div>
        <div className="box_shadow">
          <div className='rounded-xl p-4 bg-gray-200 relative z-10'>
            <a href="https://github.com/0xschwap" rel="noreferrer" target="_blank">
              <Icon icon="mdi:github" width="30" color="gray" />
            </a>
          </div>
        </div>
      </div>
    </div>
  }
  
  