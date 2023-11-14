export const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzNhNjdmNzFmOWExNWUxNDgxMzBmNDBkMWRlYjliYiIsInN1YiI6IjY1MGM4MTdiOTNkYjkyMDBhYzJiNmFhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dHqJB4SU14PtXB5Em94NjsrKL0wmXSwpRdute-C3tMI'
    }
  };


  export const fetchData=async(url,opt)=>{
        const data=await fetch(url,opt);
        const result=await data.json();
       
        return result
  }