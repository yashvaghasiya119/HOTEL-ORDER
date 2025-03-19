import { useState } from "react"

export function Addsection() {
  const [input,setinput] =useState("")
    const [data, setdata] = useState([])
    const [contety,setcontaty] = useState(0)
    
    function formsubmit(e){
        e.preventDefault()
        setdata((prev)=>([...prev,input]))
    }
    console.log(data);
    
    return <>
        <div className="form-container">
            <form onSubmit={formsubmit} className="form">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="input-field"
                    placeholder="Enter item"
                />
                <button type="submit" className="submit-btn">Submit</button>
            </form>
        </div>
        <div className="container">
            {data && data.map((c, i) => {
                return (
                    <div key={i} className="item">
                        <h2 className="item-title">{c}</h2>
                        <div className="counter">
                            <button
                                className="button increment"
                                onClick={() => setcontaty(contety + 1)}
                            >
                                +
                            </button>
                            <h2 className="count">{contety}</h2>
                            <button
                                className="button decrement"
                                onClick={() => setcontaty(contety - 1)}
                                disabled={contety < 1}
                            >
                                -
                            </button>
                        </div>
                    </div>
                );
            })}
        </div>
    </>
}