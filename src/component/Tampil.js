import Display from '../../src/component/Display'
import {user} from '../dataDummy/user'

const Tampil =()=> {
    return(
    <>
     {user.map((item, index)=>(
        <div>
            <Display image={item.image} username={item.username} follower={item.follower}/>
        </div>
     ))}
    
    </>
    )
    
}

export default Tampil