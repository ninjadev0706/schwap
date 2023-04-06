import styles from 'styles/Home.module.scss'
import { Icon } from '@iconify/react'
import MainBox from 'components/MainBox'

export default function Home() {
  return (
    <div className="bg-gray-200 h-screen flex flex-col justify-center pt-20">
      <Header />
      <MainBox />
      <Footer />
    </div>
  )
}

function Header() {
  return (
    <header className={styles.header}>
      <div className={`${styles.box_shadow}`}>
        <div className='rounded-xl p-4 px-10 bg-gray-200 z-10 relative'>
          <a href="https://schwap.app">
            <img src="/schwap_logo.png" width="50" alt="" />
          </a>
        </div>
      </div>
    </header>
  )
}

function Footer() {
  return <div className='flex justify-center mb-20'>
    <div className='flex gap-4'>
      <div className={`${styles.box_shadow}`}>
        <div className='rounded-xl p-4 bg-gray-200 relative z-10'>
          <a href="https://schwap.app">
            <Icon icon="mdi:twitter" width="30" color="gray" />
          </a>
        </div>
      </div>
      <div className={`${styles.box_shadow}`}>
        <div className='rounded-xl p-4 bg-gray-200 relative z-10'>
          <a href="https://schwap.app">
            <Icon icon="simple-line-icons:doc" width="30" color="gray" />
          </a>
        </div>
      </div>
      <div className={`${styles.box_shadow}`}>
        <div className='rounded-xl p-4 bg-gray-200 relative z-10'>
          <a href="https://schwap.app">
            <Icon icon="ic:baseline-discord" width="30" color="gray" />
          </a>
        </div>
      </div>
      <div className={`${styles.box_shadow}`}>
        <div className='rounded-xl p-4 bg-gray-200 relative z-10'>
          <a href="https://schwap.app">
            <Icon icon="simple-icons:substack" width="30" color="gray" />
          </a>
        </div>
      </div>
    </div>
  </div>
}
