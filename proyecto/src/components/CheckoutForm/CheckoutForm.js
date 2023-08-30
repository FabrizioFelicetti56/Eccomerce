import { useState } from "react"


const CheckoutForm = ({ onConfirm }) =>{
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    const handleConfirm = (e) => {
        e.preventDefault()

        const userData = {
            name, phone, email
        }
        onConfirm(userData)
    }

    return (
        <form on onSubmit={handleConfirm}>
            <div className="field">
            <label className="label">Nombre Completo</label>
            <div className="control">
                    <input className="input" type="text" value={name} onChange={({target})=> setName(target.value)}/>
                </div>
                </div>
                <div className="field">
                <label className="label">Telefono</label>
                <div className="control">
                    <input className="input" type="text" value={phone} onChange={({target})=> setPhone(target.value)}/>
                </div>
                </div>
                <div className="field">
                <label className="label">Email</label>
                <div className="control">
                    <input className="input" type="email"  value={email} onChange={({target})=> setEmail(target.value)}/>
                </div>
                </div>
                <div className="field is-grouped">
                <div className="control">
                    <button className="button is-link">Submit</button>
                </div>
                <div className="control">
                    <button className="button is-link is-light">Cancel</button>
                </div>
                </div>
        </form>
    )

}

export default CheckoutForm