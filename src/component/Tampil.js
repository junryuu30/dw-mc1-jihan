import Display from '../../src/component/Display'
import {user} from '../dataDummy/user'

const Tampil =()=> {
    <>
     {user.map((item, index)=>(
         <Display image={item.image} username={item.username} follower={item.follower}/>
     ))}
    
    </>
}

export default Tampil