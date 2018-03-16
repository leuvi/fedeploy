import React from 'react'

const allFruits = {
  apple: '苹果',
  orange: '橙子',
  banana: '香蕉'
}

const Fruits = ({ match }) => (
  <div className="fruits">
    <h3>您选择的是：{allFruits[match.params.id]}</h3>
    <div className={`pic ${match.params.id}`}></div>
  </div>
)

export default Fruits