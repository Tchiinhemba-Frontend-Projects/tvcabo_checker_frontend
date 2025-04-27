import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
export const UseSearch= () =>{
    const [search, setSearch] = useState<string>('')
      const navigate = useNavigate()
      const HandeleSearch = (e) =>{
          
            e.preventDefault(search);
            
            if(!search) return;
            navigate(`/map?q=${search}`)
            setSearch('')
      }
  return{HandeleSearch,search, setSearch}
}

