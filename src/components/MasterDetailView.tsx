import * as React from 'react';
import { MasterDetailWrapper, MasterContainer, DetailsContainer } from './styles/MasterDetailStyles';
import * as PropTypes from 'prop-types';

class MasterDetailView extends React.Component {
  static defaultProps = {
    masterOpen: true
  }

  static propTypes = {
    masterOpen: PropTypes.bool,
    masterSlot: PropTypes.element.isRequired,
    detailSlot: PropTypes.element.isRequired,
  };

  render() {
    const { masterOpen, masterSlot, detailSlot } = this.props as {
      masterOpen: boolean,
      masterSlot: PropTypes.ReactElementLike,
      detailSlot: PropTypes.ReactElementLike,
    };

    return (
      <MasterDetailWrapper>
        <MasterContainer>
          { masterOpen && masterSlot }
        </MasterContainer>
        <DetailsContainer>
          { detailSlot }
        </DetailsContainer>
      </MasterDetailWrapper>
    );
  }
}

export default MasterDetailView;