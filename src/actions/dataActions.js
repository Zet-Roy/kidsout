export const GET_DATA = 'GET_DATA'

export const dataActions = () => {
  return (dispatch) => {

    dispatch({
      type: GET_DATA,
      payload: data
    })

  }
}

const data = {
  priceInfo: {
    price: 930,
    priceSitter: 800,
    serviceСommission: 130,
  },
  info: [
    { 
      id: 1,
      id_img: 1,
      text: "1 год, 3 месяца"
    },
    { 
      id: 2,
      id_img: 2,
      text: "Есть особые дети"
    },
    { 
      id: 3,
      id_img: 2,
      text: "Есть младенцы"
    },
    { 
      id: 4,
      id_img: 2,
      text: "Только  после школы Kidsout"
    },
    { 
      id: 5,
      id_img: 3,
      text: "м.Чертановская, Кировоградская 2, 367"
    },
    { 
      id: 6,
      id_img: 4,
      text: "Требуется бебиситтер к мальчику 2,5 лет, опыт работы желателен, отвественная, доброжелательная, внимательная к детям"
    }
  ]
}