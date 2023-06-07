
import React,{useState}from 'react';
import { useNavigate,Link} from 'react-router-dom';



const Form = () => {

    const [inputs, setinputs] = useState({
        id:0,
        fname: "",
        email: ""
    })
    const [total,settotal]=useState([])
    const navigate = useNavigate()
    let handlechange = (e) => {
        setinputs({ ...inputs, [e.target.name]: e.target.value })
        // console.log(inputs)
    }
    const handlesubmit = () => {
            const{fname,email}=inputs
            if (fname && email) {
                const newData = {
                    id:0,
                  fname: fname,
                  email: email
                };
            total.push(newData);
            if(total)
            {
        
            (inputs.fname === "" || inputs.email === "") ? navigate("/") : navigate("/Datatable",{state:{total}})
            } 
            // console.log(total)
    }
}


    return (<>
        <div>
            <input type="text" name='fname' value={inputs.fname} onChange={handlechange} placeholder='enter your name'
             autoComplete='off' />
            <input type="email" name='email' value={inputs.email} onChange={handlechange} placeholder='enter your email'
            autoComplete='off' />
            <button className='btn btn-primary' onClick={() => handlesubmit()}>submit</button>
            <Link to={"/Datatable"} state={{total:total}}/>
        </div>
        </>
    );
}

export default Form;
