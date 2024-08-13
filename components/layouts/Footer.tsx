import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='flex items-center justify-center py-5 md:justify-between'>
      <div>
        <Link
          className='bg-gradient-to-r from-cyan-600 to-emerald-500 bg-clip-text font-semibold text-transparent'
          target='_blank'
          href='https://www.linkedin.com/in/mahmoud-adel9/'
        >
          @Mahmoud Adel
        </Link>{' '}
        copyright 2024 💖
      </div>
    </footer>
  )
}

export default Footer
