import { AiOutlineClose} from 'react-icons/ai';
import { useNavigate} from 'react-router-dom';


function Linkedin(){
    function Browser() {
        navigate('/homescreen/browser');
    }
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
           <div onClick={Browser} className='tab-one first'>
             <p>Google</p>
             <AiOutlineClose id="close" onClick={handleHome} />
           </div>
           <div className='tab-second'>
             <p>Linkedin</p>
             <AiOutlineClose onClick={Browser} id="close" />
           </div>
        </div>
        <iframe id="google"
src="https://www.linkedin.com/embed/feed/update/urn:li:activity:7029687879664627712" 
frameborder="0" width="100%" title="LinkedIn">
</iframe>
        </>
    )
}

export default Linkedin;


