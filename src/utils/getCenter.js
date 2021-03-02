export const getCenter =  ({justifyContent , alignItems , display, flexDirection} = {}) => {
    return {
     display : display ?? 'flex',
     'justify-content': justifyContent ?? 'center',
     'align-items': alignItems ?? 'center',
     'flex-wrap': 'wrap',
     'flex-direction': flexDirection ?? 'row'
    }
  }