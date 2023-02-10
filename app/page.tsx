import { Inter } from '@next/font/google'
import dayjs from 'dayjs'
import weekOfYear from 'dayjs/plugin/weekOfYear'
import MyDialog from './components/Dialog'

const inter = Inter({ subsets: ['latin'] })

function WeekNum() {
  dayjs.extend(weekOfYear);
  const WeekNumber = dayjs().week(); 
  return (
    <>
    <div className="flex h-[95vh] justify-center items-center">
      <h2 className="text-white text-[10rem]">{WeekNumber}</h2>
    </div>
    </>
  )
}

export default function Home() {
  return (
    <main>
      <MyDialog />
      <WeekNum />
    </main>
  )
}
