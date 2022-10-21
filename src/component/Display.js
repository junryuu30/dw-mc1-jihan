// import { useNavigate } from 'react-router-dom';


const Display =(props)=> {
    return (
        <>
        <div className="Card" style={{ width: '100px', backgroundColor:'red' }}>
            <div className="image">
            <img src={props.image} alt=''
                    style={{ width: '100%' }}
                    />
            </div>
            <div className="text">
                <h4>{props.username}</h4>
                <p>Followers:{props.follower}</p>
            </div>
        </div>
        </>
    )

}

export default Display