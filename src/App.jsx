import { useEffect, useState } from 'react';
import CardTransaction from './components/CardTransaction'

import './App.css'
import InputField from './components/InputField'
import Button from './components/Button'
import TableItem from './components/TableItem'

function App() {
  const [initialTransactions, setInitialTransactions] = useState([...initialData])
  const [buttonSearchValue, setButtonSearchValue] = useState('Buscar')
  const [totals, setTotals] = useState(initialData.reduce((acc, cur) => {
    cur.type === 'inflow'
      ? acc.inflow += cur.value
      : acc.outflow += cur.value

    return acc
  }, { inflow: 0, outflow: 0 }))

  const handleSubmitForm = (e) => {
    e.preventDefault()
    setButtonSearchValue('Buscando...')
    e.target[1].style.cursor = 'not-allowed'
    e.target[1].disabled = true
    setTimeout(() => {
      setButtonSearchValue('Buscar')
      e.target[1].style.cursor = 'pointer'
      e.target[1].disabled = false
      setInitialTransactions(initialData.filter(item =>
        item.description.toLowerCase().includes(e.target.description.value.toLowerCase()) ||
        item.category.toLowerCase().includes(e.target.description.value.toLowerCase()) 
      ))
    }, 1000)
  }

  return (
    <>
      <header className="bg-[rgb(18,18,20)] pt-10 pb-30 px-0">
        <div className='font-roboto w-full max-w-[1120px] mx-auto flex items-center justify-between px-6'>
          <img src="https://dtmoney-2-jfernandesdev.vercel.app/assets/logo.1c8c797f.svg" alt="Logo" className="h-10.5" />
          <Button
            paddingX="px-5"
            text="Nova transação"
          />
        </div>
      </header>
      <div className='flex justify-between -translate-y-1/2 mx-auto max-w-[1120px] px-6'>
        <CardTransaction
          title={'Entradas'}
          icon={'../src/assets/up-arrow.svg'}
          value={totals.inflow}
        />
        <CardTransaction
          title={'Saídas'}
          icon={'../src/assets/down-arrow.svg'}
          value={totals.outflow}
        />
        <CardTransaction
          title={'Total'}
          icon={'../src/assets/dollar.svg'}
          value={totals.inflow - totals.outflow}
          bgColor={'bg-[rgb(1,95,67)]'}
        />
      </div>
      <main className='font-roboto -translate-y-4 max-w-[1120px] mx-auto px-6'>
        <form className='flex gap-4' onSubmit={handleSubmitForm}>
          <InputField
            type="text"
            tag="Busque por transações"
            inputName="description"
          />
          <Button
            text={buttonSearchValue}
            buttonType='submit'
            icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><circle cx="116" cy="116" r="84" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></circle><line x1="175.4" y1="175.4" x2="224" y2="224" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line></svg>}
            bgColor={'transparent'}
            textColor={'text-[rgb(0,179,126)]'}
            borderColor={'border border-[rgb(0,135,95)]'}
          />
        </form>
        <table className='w-full my-[28px] border-separate border-spacing-y-2'>
          <tbody className='text-white'>
            {initialTransactions.map(transaction => {
              return <TableItem
                key={transaction.id}
                transaction={transaction}
              />
            })}
          </tbody>
        </table>
      </main>
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <div className="bg-[rgb(32,32,36)] p-6 rounded-lg shadow-lg w-full max-w-md">
          <h2 className='text-white font-roboto text-[24px] font-bold'>Nova Transação</h2>
          <Button
            bgColor={'transparent'}
            icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><line x1="200" y1="56" x2="56" y2="200" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="200" y1="200" x2="56" y2="56" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line></svg>}
            hoverBg={'transparent'}
          />
          <form>
            <InputField inputName={'description'} inputType={'text'} tag={'Decrição'} />
            <InputField inputName={'value'} inputType={'number'} tag={'Preço'} />
            <InputField inputName={'category'} inputType={'text'} tag={'Categoria'} />
            <div className="type-transaction-selector">
              <Button
                text={'Entrada'}
                icon={<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#F75A68" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><circle cx="128" cy="128" r="96" fill="none" stroke="#F75A68" stroke-miterlimit="10" stroke-width="16"></circle><polyline points="94.1 134.1 128 168 161.9 134.1" fill="none" stroke="#F75A68" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polyline><line x1="128" y1="88" x2="128" y2="168" fill="none" stroke="#F75A68" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line></svg>}
              />
              <Button
                text={'Saída'}
                icon={<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#00B37E" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><circle cx="128" cy="128" r="96" fill="none" stroke="#00B37E" stroke-miterlimit="10" stroke-width="16"></circle><polyline points="94.1 121.9 128 88 161.9 121.9" fill="none" stroke="#00B37E" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polyline><line x1="128" y1="168" x2="128" y2="88" fill="none" stroke="#00B37E" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line></svg>}
              />
            </div>
            <Button text={'Cadastrar'} />
          </form>
        </div>
      </div>
    </>
  )
}

const initialData = [
  {
    id: '1',
    description: 'Fone de ouvido',
    value: 150,
    type: 'outflow',
    category: 'Acessórios',
    date: '11/08/2022'
  },
  {
    id: '2',
    description: 'Salário',
    value: 5400,
    type: 'inflow',
    category: 'Salário',
    date: '05/08/2022'
  },
  {
    id: '3',
    description: 'Aluguel do apartamento',
    value: 1200,
    type: 'outflow',
    category: 'Casa',
    date: '05/08/2022'
  },
  {
    id: '4',
    description: 'Hamburger',
    value: 59,
    type: 'outflow',
    category: 'Alimentação',
    date: '03/08/2022'
  },
  {
    id: '5',
    description: 'Desenvolvimento de site',
    value: 1200,
    type: 'inflow',
    category: 'Freelancer',
    date: '01/08/2022'
  },
]

export default App
