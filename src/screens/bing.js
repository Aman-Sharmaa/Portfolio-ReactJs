import { useNavigate} from 'react-router-dom';
import { AiOutlineClose} from 'react-icons/ai';

function Bing(){
    const navigate = useNavigate();
    function handleHome() {
        navigate('/homescreen');
    }
    return(
        <>    
         <div className='close'>
            <div className="icon" onClick={handleHome}></div>
            <div className="icon white"></div>
            <div className="icon icon-left"></div>
        </div>

        <div className='tabs custom' >
           <div className='tab-one first cus'>
             <p>Bing</p>
             <AiOutlineClose onClick={handleHome} id="close" />
           </div>
        </div>
      <iframe name="I1" id="google" width="100%" 
      src="https://www.bing.com/"></iframe>
        </>
    )
}

export default Bing;