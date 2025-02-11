import React, { 
  createContext, 
  useState 
} from 'react'; 

// Создаем контекст с начальным состоянием 
const MyContext = createContext({ 
  data: null, 
  updateData: () => { }, 
}); 

const MyProvider = ({ children }) => { 
  const [data, setData] = useState(null); 

  const updateData = newData => { 
      setData(newData); 
  }; 

  return ( 
      <MyContext.Provider value={{ data, updateData }}> 
          {children} 
      </MyContext.Provider> 
  ); 
}; 

export { MyContext, MyProvider };