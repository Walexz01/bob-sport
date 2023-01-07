export const filterItems= (list,input)=> {
    const filtered = list.filter(list => {
        if (input === '') {
        return list;
        } else if ( list.customer_name.toLowerCase().includes(input.toLowerCase()) || list.id === Number(input) || list.order_id === Number(input)) {
        return list;
        }else{
            return ''
        }
      })
      return filtered 
}