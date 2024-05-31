export const addemplo = (data) => {
    return{
        type:'ADDEMPLO',
        payload:data
    }
}

export const Singleemplo = (id) => {
    return{
        type:'SINGLEEMPLO',
        payload:id
    }
}

export const Updateemplo=(data)=>{
    return{
        type:'UPDATEEMPLO',
        payload: data
    }
}

export const Deleteemplo = (id) => {
    return{
        type: 'DELETEEMPLO',
        payload: id
    }
}