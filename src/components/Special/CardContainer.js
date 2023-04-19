import React from 'react'
import Card from './Card'

const CardContainer = ({products}) => {
  return (
    <div className='flex flex-wrap justify-between'>
       {
          products?.map(item => <Card key={item.id} {...item} />)
       }
    </div>
  )
}

export default CardContainer