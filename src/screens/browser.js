import { useNavigate} from 'react-router-dom';
import { AiOutlineClose} from 'react-icons/ai';


function Browser(){
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

        <div className='tabs'>
           <div className='tab-one first'>
             <p>Google</p>
             <AiOutlineClose onClick={handleHome} id="close" />
           </div>
        </div>
      <iframe name="I1" id="google" width="100%" 
      src="https://www.google.com/webhp?igu=1"></iframe>
        </>
    )
}

export default Browser;