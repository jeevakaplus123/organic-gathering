import React, { PureComponent } from "react"
import WorkshopList from "./Workshops"
import { connect } from 'react-redux'
import {getWorkshops} from "../../actions/workshopActions"


class Workshop extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
             visible: true
          }
    }

    componentDidMount(){
        console.log(this.props.initialLoading)
        
        if(this.props.initialLoading){
            const privateToken = "I6NFHVSC7T43DVZOZCG4"

            this.props.fetchWorkshopList(privateToken)
        }
    }

    render() {
        return (
          <WorkshopList
          {...this.props}
            />
        )
    }
}
const mapStateToProps = ({ workshop }) => ({
    isLoading: workshop.isLoading,
    initialLoading: workshop.initialLoading,
    data: workshop.events
});

const mapDispatchToProps = dispatch => ({
    fetchWorkshopList: (token) => dispatch(getWorkshops(token))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Workshop);