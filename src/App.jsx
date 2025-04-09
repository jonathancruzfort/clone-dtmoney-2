import CardTransaction from './components/CardTransaction'

import './App.css'
import InputField from './components/InputField'
import Button from './components/Button'

function App() {

  return (<>
    <header className="bg-[rgb(18,18,20)] px-37 pb-29.5 pt-10 flex items-center justify-between font-roboto">
      <img src="https://dtmoney-2-jfernandesdev.vercel.app/assets/logo.1c8c797f.svg" alt="Logo" className="h-10.5" />
      <Button
        text="Nova transação"
      />
    </header>
    <div className='flex justify-between px-37 -mt relative -translate-y-1/2'>
      <CardTransaction
        title={'Entradas'}
        icon={'../src/assets/up-arrow.svg'}
        value={'R$ 6.600,00'}
      />
      <CardTransaction
        title={'Saídas'}
        icon={'../src/assets/down-arrow.svg'}
        value={'R$ 1.409,00'}
      />
      <CardTransaction
        title={'Total'}
        icon={'../src/assets/dollar.svg'}
        value={'R$ 5.191,00'}
        bgColor={'bg-[rgb(1,95,67)]'}
      />
    </div>
    <main className='px-37 font-roboto'>
      <form className='flex w-full gap-4'>
        <InputField
          type="text"
          tag="Busque por transações"
        />
        <Button
          text={'Buscar'}
          bgColor={'transparent'}
          textColor={'text-[rgb(0,179,126)]'}
          borderColor={'border border-[rgb(0,135,95)]'}
        />
      </form>
    </main>
  </>)
}

export default App
