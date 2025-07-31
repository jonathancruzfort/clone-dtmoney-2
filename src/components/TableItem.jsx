export default ({transaction}) => {
    const formatedValue = transaction.type === 'outflow'
        ? <span className="text-[rgb(247,90,104)]">- {transaction.value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</span>
        : <span className="text-[rgb(0,179,126)]">{transaction.value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</span>
    
    return <tr>
        <td className='bg-[rgb(41,41,46)] w-[50%] px-8 rounded-tl-[6px] rounded-bl-[6px]'>
            {transaction.description}
        </td>
        <td className='bg-[rgb(41,41,46)] p-[1.1rem] px-8'>{formatedValue}</td>
        <td className='bg-[rgb(41,41,46)] p-[1.1rem] px-8'>
            {transaction.category}
        </td>
        <td className='bg-[rgb(41,41,46)] p-[1.1rem] px-8 rounded-tr-[6px] rounded-br-[6px]'>
            {transaction.date}
        </td>
    </tr>
}