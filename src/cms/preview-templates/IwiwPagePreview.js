import React from 'react'
import PropTypes from 'prop-types'
import { IwiwPageTemplate } from '../../templates/iwiw-page'

const IwiwPagePreview = ({ entry, widgetFor }) => {
  const data = entry.getIn(['data']).toJS()
  return (  
    <IwiwPageTemplate
      title={entry.getIn(['data', 'title'])}
      persons={entry.getIn(['data', 'person'])}
      image={data.image}
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
