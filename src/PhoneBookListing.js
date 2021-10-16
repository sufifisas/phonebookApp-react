import React, { useState , useEffect } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { Ring } from 'react-awesome-spinners'

function PhoneBookListing() {
    const [list, setList] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        axios
        .get(`/api/phonebooks`)
        .then(response => {
            setList(response.data)
            setLoading(false)
            })
        .catch(error => {
            console.log(error)
            setLoading(false)
        })
    },[])
    return(
        <div className="card glass glass_card text-left">
            <div className="head-table">
                <div className="row">
                    <div className="col-8">
                        <h4>Phone Book</h4>
                    </div>
                    <div className="col-4 text-right">
                        <Link to="/CreatePhoneBook"><button><FontAwesomeIcon icon={faPlus} />Add</button></Link>
                    </div>
                </div>
            </div> 
            <div className="list-table glass">
                {loading ? 
                <div className="text-center">
                    <Ring />
                </div>
                :
                <ul className="scrollable">
                    
                {list.map((item, i) => {
                return (
                    <li>
                        <div className="row" key= {i}>
                            <div className="col-6">
                                {item.name}
                            </div>
                            <div className="col-6 text-right">
                                {item.number}
                            </div>
                        </div>
                    </li>
                )
                })}
                
            </ul>}
            </div>
        </div>
    )
}

export default PhoneBookListing;