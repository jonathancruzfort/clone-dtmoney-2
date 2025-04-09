export default ({ text, bgColor, textColor, borderColor }) => {
    return <button
        className={`
            ${bgColor || 'bg-[rgb(0,135,95)]'}
            ${textColor || 'text-white'}
            ${borderColor || 'border-none'}
            text-md
            font-bold
            py-3.5
            px-5
            rounded-md
            hover:bg-[rgb(0,179,126)]
            hover:text-white
            transition-colors
            duration-200
            cursor-pointer
            outline-none
            focus:shadow-[0px_0px_0px_2px_rgb(0,135,95)]
        `}
    >
        {text}
    </button>
}