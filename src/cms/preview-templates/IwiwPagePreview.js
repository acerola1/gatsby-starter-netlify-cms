import React from 'react'
import PropTypes from 'prop-types'
import { IwiwPageTemplate } from '../../templates/iwiw-page'

const IwiwPagePreview = ({ entry, widgetFor }) => (
  <IwiwPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

IwiwPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default IwiwPagePreview
