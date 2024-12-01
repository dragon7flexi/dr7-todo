import { RecoilRoot } from 'recoil'
import './App.css'
import ScheduleTop from './components/ScheduleTop'

function App() {
  return (
    <div>
      <RecoilRoot>
        <ScheduleTop />
      </RecoilRoot>        
    </div>
  )
}

export default App
