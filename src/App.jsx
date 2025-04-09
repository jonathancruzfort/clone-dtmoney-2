import CardTransaction from './components/CardTransaction'

import './App.css'
import InputField from './components/InputField'
import Button from './components/Button'
import TableItem from './components/TableItem'

function App() {

  return (<>
    <header className="bg-[rgb(18,18,20)] px-37 pb-29.5 pt-10 flex items-center justify-between font-roboto">
      <img src="https://dtmoney-2-jfernandesdev.vercel.app/assets/logo.1c8c797f.svg" alt="Logo" className="h-10.5" />
      <Button
        paddingX="px-5"
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
          icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><circle cx="116" cy="116" r="84" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></circle><line x1="175.4" y1="175.4" x2="224" y2="224" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line></svg>}
          bgColor={'transparent'}
          textColor={'text-[rgb(0,179,126)]'}
          borderColor={'border border-[rgb(0,135,95)]'}
        />
      </form>
      <table className='w-full my-8 '>
        <tbody className='text-white flex flex-col gap-2'>
          <TableItem />
          <TableItem />
          <TableItem />
        </tbody>
      </table>
    </main>
  </>)
}

export default App
