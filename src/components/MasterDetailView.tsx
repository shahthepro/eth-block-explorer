import * as React from 'react';
import { MasterDetailWrapper, MasterContainer, DetailsContainer } from './styles/MasterDetailStyles';
import * as PropTypes from 'prop-types';

interface IMasterDetailViewProps {
  autoHeight: boolean
  masterOpen: boolean,
  masterSlot: any,
  detailSlot: any,
}

class MasterDetailView extends React.Component<IMasterDetailViewProps> {
  static defaultProps = {
    masterOpen: true,
    autoHeight: false,
  }

  static propTypes = {
    masterOpen: PropTypes.bool,
    masterSlot: PropTypes.element.isRequired,
    detailSlot: PropTypes.element.isRequired,
    autoHeight: PropTypes.bool
  };

  render() {
    const { masterOpen, masterSlot, detailSlot, autoHeight } = this.props;

    return (
      <MasterDetailWrapper className={ `limit-height ${autoHeight ? 'auto-height' : ''}`}>
        <MasterContainer className={ masterOpen ? '' : 'master-closed' }>
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