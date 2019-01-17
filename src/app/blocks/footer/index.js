import { connect } from 'react-redux'
import { createSelector } from 'reselect'
import { bindActionCreators } from 'redux'
import { selectTerms } from '../../data/global/selectors'
import { loadTerms } from '../../data/global/actions'
import Footer from './component'

const mapStateToProps = createSelector(
  selectTerms,
  terms => ({
    terms,
  }),
)

const mapDispatchToProps = dispatch => bindActionCreators({
  loadTerms,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Footer)
