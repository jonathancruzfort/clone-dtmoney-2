
export default ({inputType, tag}) => {
    return <input
        type={inputType}
        placeholder={tag}
        className="
            w-full
            p-4 bg-[rgb(18,18,20)]
            rounded-lg
            text-white
            outline-none
            focus:shadow-[0px_0px_0px_2px_rgb(0,135,95)]
        "
    />
}