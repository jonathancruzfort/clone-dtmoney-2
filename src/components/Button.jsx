export default ({ text, bgColor, textColor, borderColor, icon, paddingX }) => {
    return <button
        className={`
            ${bgColor || 'bg-[rgb(0,135,95)]'}
            ${textColor || 'text-white'}
            ${borderColor || 'border-none'}
            ${paddingX || 'px-4'}
            text-md
            flex
            items-center
            justify-between
            gap-2
            font-bold
            h-12.5
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
        {icon}{text}
    </button>
}