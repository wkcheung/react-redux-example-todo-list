import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'semantic-ui-react'

const Link = ({ active, children, onClick }) => {
  return (
    <Button href=""
		color={ active? 'blue' : null}
		active={active}
		onClick={e => {
			e.preventDefault()
			onClick()
		}}
    >
      {children}
    </Button>
  )
}

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link
