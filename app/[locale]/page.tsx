import { getDictionary } from '@/lib/dictionary'
import { onboarding } from '@/public/assets'
import { getDoctors } from '@/services/api'
import Image from 'next/image'
import Link from 'next/link'

type HomePageProps = {
  params: {
    locale: 'ar' | 'en'
  }
}

export default async function Home({ params: { locale } }: HomePageProps) {
  const { profile } = await getDictionary(locale)

  const doctors = await getDoctors()
  return (
    <div className='grid h-screen max-h-screen grid-cols-2'>
      <section className='col-span-2 mx-8 flex h-full flex-col justify-between py-10 md:mx-24 md:py-24 xl:col-span-1 xl:mx-40'>
        <div>
          <div className='mb-5 space-y-2'>
            <h2 className='text-2xl font-bold md:text-4xl'>Hi there, ....</h2>
            <p className='text-dark-700 md:text-lg'>
              Get Started with Appointments.
            </p>
          </div>

          {/* <PatientForm /> */}
        </div>
      </section>

      <section className='relative col-span-1 hidden size-full xl:flex'>
        <Image
          src={onboarding}
          fill
          className='object-cover'
          quality={90}
          placeholder='blur'
          alt='Onboarding image'
        />
      </section>
    </div>
  )
}
