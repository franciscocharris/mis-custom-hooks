import { useEffect, useRef, useState } from "react";


export const useFetch = (url) => {
    
    const isMounted = useRef(true);

    const [state, setState] = useState({data:null, loading: true, error: false});

    useEffect(()=> {
        
        // este return se ejecuta cuando se desmonta el componente
        return () =>{
            isMounted.current = false;
        }
    }, []);

    useEffect( () => {

        setState({data:null, loading: true, error: false});

        fetch(url)
            .then(resp => resp.json())
            // arrow function
            .then(data => {
                if(isMounted.current){
                    setState({
                        loading: false,
                        error: false,
                        data
                    });
                }else{
                    console.log('setState no se llamo');
                }
            })
            .catch(() => {
                setState({data:null, loading: false, error: 'no se pudo cragar la info'});
            });
    }, [url]);

    return state;
}
