
export default ({inputType, tag, inputName}) => {
    return <input
        type={inputType}
        placeholder={tag}
        name={inputName}
        className="
            w-full
            p-4
            bg-[rgb(18,18,20)]
            rounded-lg
            text-[rgb(196,196,204)]
            outline-none
            focus:shadow-[0px_0px_0px_2px_rgb(0,135,95)]
        "
    />
}