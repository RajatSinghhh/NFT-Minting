const Button = ({ onClick, label, type }) => {
    return (
        <div >
            <button className="bg-purple-600 hover:bg-purple-800 border-purple-900 text-white font-bold py-2 px-4 rounded-full mt-2"
            onClick={onClick} type={type} >{label}</button>
        </div>
    )
}
export default Button
