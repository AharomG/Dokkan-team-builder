import { useEffect, useState } from "react";

export const useFetchQL = (url: URL, queryParams: String, charType?: String): Object => {
  const [data, setData] = useState({})
  let query = `
    query {
      characters${charType !== null ? charType : ''}{
       ${queryParams}
      }
    }
  `;
  useEffect(()=>{
    const call = async () => {
        let response = await fetch(url,{
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify({query}),
        })
    
      return response.json();
    }
    call().then(value => {
      value.data.characters.forEach(el => {
        let find = el.imageURL.indexOf('.png');
        el.imageURL = el.imageURL.slice(0,find+4);
      })
      setData(value);
    });
  },[url,charType]);
  return data;
}