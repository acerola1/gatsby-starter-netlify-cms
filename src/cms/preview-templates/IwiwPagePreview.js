import React from 'react'
import PropTypes from 'prop-types'
import { IwiwPageTemplate } from '../../templates/iwiw-page'

const IwiwPagePreview = ({ entry, widgetFor }) => {
  const data = entry.getIn(['data']).toJS()
  return (  
    <IwiwPageTemplate
      title={data.title}
      persons={data.persons}
    />
  )
}

IwiwPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default IwiwPagePreview
