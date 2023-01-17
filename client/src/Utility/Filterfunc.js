export const filterItems= (list,input,filterString, filterNo1,filterNo2)=> {
    const filtered = list.filter(list => {
        if (input === '') {
        return list;
        } else if ( list[filterString].toLowerCase().includes(input.toLowerCase()) || list[filterNo1] === Number(input) || list[filterNo2] === Number(input)) {
        return list;
        }else{
            return ''
        }
      })
      return filtered 
}