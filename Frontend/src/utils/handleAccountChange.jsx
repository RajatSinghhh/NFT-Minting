const handleAccountChange = async (setState) => {
    const accounts = await window.ethereum.request({ method: "eth_requestAccounts" })
    const selectedAccounts = accounts[0]
    console.log(selectedAccounts)
    setState(prevState => ({ ...prevState, selectedAccounts }))
}

export default handleAccountChange