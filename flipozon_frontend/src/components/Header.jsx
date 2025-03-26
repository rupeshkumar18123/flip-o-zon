
import React from 'react'
import CartIcon from './header_component/CartIcon'

function Header() {
  return (
    <div>
      {/* <div>home</div>
      <div>like</div>
      <div>cart</div>
      <div>order</div>
      <div>profile</div>
      <div>flip-o-zon payment gateway</div>
      <div>future implementation</div>
      <div>from today we will make design for this website on figma</div> */}

      <div>logo or name</div>
      <div>location</div>
      <div>search</div>
      <div>user name or account</div>
      <div>order or return</div>
      <div>
        <CartIcon/>
      </div>
    </div>
  )
}

export default Header