import React from 'react'
// import avatar from '../../images/avatar_login.png'
import emptyStar from '../../images/emptyStar.png'
import fullStar from '../../images/fullStar.png'
import halfStar from '../../images/halfStar.png'

export default function Star(props) {
    let mapping = {
        1: emptyStar,
        2: halfStar,
        3: fullStar
       }
  return (
    <>
        <img className={props.className} src={mapping[props.val]} alt="" />
    </>
  )
}
