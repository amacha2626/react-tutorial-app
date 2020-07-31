import React from 'react';

const Title = (props) => {
  return(
    <div>
      <h2 style={ props.titleStyle }>{ props.title }</h2>
    </div>
  )
}

export default Title;