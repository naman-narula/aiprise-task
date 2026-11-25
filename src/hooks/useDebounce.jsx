import {useEffect,useRef,useState} from 'react';


function useDebounce(props){
    const [value,setValue] = useState();
    
    const timerRef = useRef(null);
    useEffect(()=>{
        if(timerRef.current){
            clearTimeout(timerRef.current);
        }
        timerRef.current = setTimeout(()=>{
           setValue(props.inputFunction());
        },300)
        
        return ()=>clearTimeout(timerRef.current);

    },[props.inputFunction]);
    return value;
}

export default useDebounce;