import React, { Component } from "react";
import ServicesImage from "../components/service/ServicesImage";

class ServicesContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editMode: false,
            serviceImg1: "http://placekitten.com/200/200",
            serviceImg2: 'http://placekitten.com/200/200',
            serviceImg3: 'http://placekitten.com/200/200',
            serviceName1: 'Service Title Goes Here',
            serviceDescription1: 'Brief Description Goes Here',
            serviceName2: 'Service Title Goes Here',
            serviceDescription2: 'Brief Description Goes Here',
            serviceName3: 'Service Title Goes Here',
            serviceDescription3: 'Brief Description Goes Here'
        }
    }

    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    changeEditMode = () => {
        this.setState({
            editMode: !this.state.editMode
        })
    }

    componentDidMount() {
        const serviceImg1 = localStorage.getItem('serviceImg1')
        const serviceImg2 = localStorage.getItem('serviceImg2')
        const serviceImg3 = localStorage.getItem('serviceImg3')
        const serviceName1 = localStorage.getItem('serviceName1')
        const serviceName2 = localStorage.getItem('serviceName2')
        const serviceName3 = localStorage.getItem('serviceName3')
        const serviceDescription1 = localStorage.getItem('serviceDescription1')
        const serviceDescription2 = localStorage.getItem('serviceDescription2')
        const serviceDescription3 = localStorage.getItem('serviceDescription3')
        this.setState({ serviceImg1,
                          serviceImg2,
                          serviceImg3,
                          serviceName1,
                          serviceName2,
                          serviceName3,
                          serviceDescription1,
                          serviceDescription2,
                          serviceDescription3
                      });
    }

    updateService = (event) => {
        event.preventDefault();
        const { serviceImg1,
            serviceImg2,
            serviceImg3,
            serviceName1,
            serviceName2,
            serviceName3,
            serviceDescription1,
            serviceDescription2,
            serviceDescription3 } = this.state;
        localStorage.setItem('serviceImg1', serviceImg1);
        localStorage.setItem('serviceImg2', serviceImg2);
        localStorage.setItem('serviceImg3', serviceImg3);
        localStorage.setItem('serviceName1', serviceName1);
        localStorage.setItem('serviceName2', serviceName2);
        localStorage.setItem('serviceName3', serviceName3);
        localStorage.setItem('serviceDescription1', serviceDescription1);
        localStorage.setItem('serviceDescription2', serviceDescription2);
        localStorage.setItem('serviceDescription3', serviceDescription3);
    }

    renderDefaultView = () => {
        const { serviceImg1,
            serviceImg2,
            serviceImg3,
            serviceName1,
            serviceName2,
            serviceName3,
            serviceDescription1,
            serviceDescription2,
            serviceDescription3
        } = this.state
        return (
            <div>
                <div>
                    <img src={serviceImg1} alt="kitty" onDoubleClick={this.changeEditMode} />
                    <h3 onDoubleClick={this.changeEditMode}>{serviceName1}</h3>
                    <p onDoubleClick={this.changeEditMode}>{serviceDescription1}</p>
                    <br />
                    <img src={serviceImg2} alt="kitty" />
                    <h3 onDoubleClick={this.changeEditMode}>{serviceName2}</h3>
                    <p onDoubleClick={this.changeEditMode}>{serviceDescription2}</p>
                    <br />
                    <img src={serviceImg3} alt="kitty" />
                    <h3 onDoubleClick={this.changeEditMode}>{serviceName3}</h3>
                    <p onDoubleClick={this.changeEditMode}>{serviceDescription3}</p>
                </div>
            </div>
        )
    }

    renderEditView = () => {
        const { serviceImg1,
            serviceImg2,
            serviceImg3,
            serviceName1,
            serviceName2,
            serviceName3,
            serviceDescription1,
            serviceDescription2,
            serviceDescription3 } = this.state
        return (
            <div>
                <div>
                    <input
                        type="text"
                        value={serviceImg1}
                        name="serviceImg1"
                        onChange={this.handleChange}
                    />
                    <br />
                    <input
                        type="text"
                        value={serviceName1}
                        name="serviceName1"
                        onChange={this.handleChange}
                    />
                    <br />
                    <input
                        type="text"
                        value={serviceDescription1}
                        name="serviceDescription1"
                        onChange={this.handleChange}
                    />
                    <br />
                    <input
                        type="text"
                        value={serviceImg2}
                        name="serviceImg2"
                        onChange={this.handleChange}
                    />
                    <br/>
                    <input
                        type="text"
                        value={serviceName2}
                        name="serviceName2"
                        onChange={this.handleChange}
                    />
                    <br/>
                    <input
                        type="text"
                        value={serviceDescription2}
                        name="serviceDescription2"
                        onChange={this.handleChange}
                    />
                    <br />
                    <input
                        type="text"
                        value={serviceImg3}
                        name="serviceImg3"
                        onChange={this.handleChange}
                    />
                    <br/>
                    <input
                        type="text"
                        value={serviceName3}
                        name="serviceName3"
                        onChange={this.handleChange}
                    />
                    <br/>
                    <input
                        type="text"
                        value={serviceDescription3}
                        name="serviceDescription3"
                        onChange={this.handleChange}
                    />
                    <br />
                    <button onClick={this.changeEditMode}>X</button>
                    <button onClick={this.updateService}>Submit</button>
                </div>
            </div>
        )
    }

    render() {
        return (
            <div>
                <h1>Service Container</h1>
                <ServicesImage />
                {this.state.editMode && this.props.currentUser.is_admin === true ?
                this.renderEditView()
                :
                this.renderDefaultView()}
            </div>
        )
    }
}

export default ServicesContainer;