// import {  useNavigate } from "react-router-dom";
// import {user} from '../dataDummy/user'

const Display =(props)=> {
    
    // const navigate = useNavigate()

    return (
        <>
        {/* {user.map((item, index)=>( */}
            <div className="Card" style={{ width: '400px', backgroundColor:'grey', display:'flex', margin:'20px' }}>
                <div className="image">
                <img src={props.image} alt=''
                        style={{ width: '150px', margin:'10px' }}
                        />
                </div>
                <div className="text">
                    <h4
                    style={{ cursor:'pointer'}}
                    // onClick={() => navigate(`/detail/${item.id}`)}
                    >
                        @{props.username}</h4>
                    <p>Followers:{props.follower}</p>
                </div>
            </div>
        {/* // ))} */}
        </>
    )

}

export default Display