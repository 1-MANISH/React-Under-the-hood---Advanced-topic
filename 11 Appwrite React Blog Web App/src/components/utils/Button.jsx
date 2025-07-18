

function Button({
        children,
        type="button",
        bgColor="bg-blue-600",
        textColor="text-white",
        className="",
        ...props
}) {
        return (
                <button className={`px-6 py-2 duration-200 ${bgColor} rounded-lg ${textColor} ${className}`} {...props}>
                        {children}
                </button>
        )
}

export default Button