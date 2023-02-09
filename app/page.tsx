import { Inter } from '@next/font/google'
import dayjs from 'dayjs'
import weekOfYear from 'dayjs/plugin/weekOfYear'

const inter = Inter({ subsets: ['latin'] })

function WeekNum() {
  dayjs.extend(weekOfYear);
  const WeekNumber = dayjs().week(); 
  return (
    <>
    <div className="flex h-[95vh] justify-center items-center">
      <h2 className="text-white text-[10rem]">{WeekNumber}</h2>
    </div>
    <footer className="flex justify-center items-center mb-3 text-white opacity-70">
      <span className="text-sm">made by: <a href="https://jeksn.me" className="opacity-80 hover:opacity-100 transition-all ease-in-out duration-300">@jeksn</a></span>
    </footer>
    </>
  )
}

export default function Home() {
  return (
    <main>
      <WeekNum />
    </main>
  )
}
