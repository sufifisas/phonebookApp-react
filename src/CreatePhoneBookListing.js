import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import { Ring } from 'react-awesome-spinners'

function CreatePhoneBookListing() {
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const [text, setText] = useState('')
    const [alert, setAlert] = useState(false)
    const [success, setSuccess] = useState(false)
    const [loading, setLoading] = useState(false)

    const submitHandler = e => {

        setLoading(true)
        const details = {
            name : name,
            number : number,
        }
		e.preventDefault()
		axios
			.post('/api/phonebooks', details )
			.then(response => {
                // setLoading(false);
                // setSuccess(true)
                // setResult(true)
                setText(`${name} has been successfully added to phone book`)
                setSuccess(true)
                setAlert(true)
                setLoading(false)
			})
			.catch(error => {
                // setLoading(false)
                // setResult(true)
                setText(`Please fill in the field`)
                setSuccess(false)
                setAlert(true)
                setLoading(false)
            })
        }
    return(
        <div className="card glass glass_card text-left">
            <div className="head-table">
                <div className="row">
                    <div className="col-8">
                        <h4>Add New List</h4>
                    </div>
                    <div className="col-4 text-right">
                        <Link to="/PhoneBook"><button>Back</button></Link>
                    </div>
                </div>
            </div> 
            { alert && 
                <div>
                    {success ? 
                    <div className="alert-banner glass">
                        <p>{text}</p>
                    </div> :
                    <div className="alert-banner failed glass">
                        <p>{text}</p>
                    </div>
                    }
                </div>
            }
            {loading ? 
            <div className="text-center">
                <Ring />
            </div>
            :
            <form onSubmit={submitHandler}>
                <div className="form-group">
                    <div className="group">
                        <label>Name</label>
                        <input type="text" className="form-control" placeholder="John Doe" value={name} onChange={e => setName(e.target.value)}/>
                    </div>
                    <div className="group">
                        <label>Number</label>
                        <input type="text" className="form-control" placeholder="012-34567890" value={number} onChange={e => setNumber(e.target.value)}/>
                    </div>
                    <div className="btn-group text-right">
                        <button className="btn" type="submit">ADD</button>
                    </div>
                </div>
            </form>
            }
        </div>
    )
}

export default CreatePhoneBookListing;