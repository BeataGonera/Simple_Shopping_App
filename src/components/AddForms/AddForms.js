import { useState } from "react"


export const AddForms = () => {

    const [name, setName] = useState("")

    const handleSubmit = () => {
        alert(`"${name} został dodany do koszyka"`)
    }

    return ( 

        <form onSubmit={handleSubmit}>
            <label for="name">Add a new product</label>
            <input 
                type="text" 
                placeholder="iPhone"
                value={name}
                onChange={(e) => setName(e.target.value)}
                ></input>
            <input type="submit" value="save"></input>
        </form>

     );
}
 
