import React, { Component } from "react";
import WorksImage from "../components/work/WorksImage";
import ServicesImage from "../components/service/ServicesImage";

class WorksContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editMode: false,
            worksImg1: "http://placekitten.com/200/200",
            worksImg2: 'http://placekitten.com/200/200',
            worksImg3: 'http://placekitten.com/200/200',
            worksImg4: 'http://placekitten.com/200/200',
            worksImg5: 'http://placekitten.com/200/200',
            worksImg6: 'http://placekitten.com/200/200',
            worksName1: 'Works Title Goes Here',
            worksDescription1: 'Brief Description Goes Here',
            worksName2: 'Works Title Goes Here',
            worksDescription2: 'Brief Description Goes Here',
            worksName3: 'Works Title Goes Here',
            worksDescription3: 'Brief Description Goes Here',
            worksName4: 'Works Title Goes Here',
            worksDescription4: 'Brief Description Goes Here',
            worksName5: 'Works Title Goes Here',
            worksDescription5: 'Brief Description Goes Here',
            worksName6: 'Works Title Goes Here',
            worksDescription6: 'Brief Description Goes Here'
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
        const worksImg1 = localStorage.getItem('worksImg1')
        const worksImg2 = localStorage.getItem('worksImg2')
        const worksImg3 = localStorage.getItem('worksImg3')
        const worksImg4 = localStorage.getItem('worksImg4')
        const worksImg5 = localStorage.getItem('worksImg5')
        const worksImg6 = localStorage.getItem('worksImg6')
        const worksName1 = localStorage.getItem('worksName1')
        const worksName2 = localStorage.getItem('worksName2')
        const worksName3 = localStorage.getItem('worksName3')
        const worksName4 = localStorage.getItem('worksName4')
        const worksName5 = localStorage.getItem('worksName5')
        const worksName6 = localStorage.getItem('worksName6')
        const worksDescription1 = localStorage.getItem('worksDescription1')
        const worksDescription2 = localStorage.getItem('worksDescription2')
        const worksDescription3 = localStorage.getItem('worksDescription3')
        const worksDescription4 = localStorage.getItem('worksDescription4')
        const worksDescription5 = localStorage.getItem('worksDescription5')
        const worksDescription6 = localStorage.getItem('worksDescription6')
        this.setState({ worksImg1,
            worksImg2,
            worksImg3,
            worksImg4,
            worksImg5,
            worksImg6,
            worksName1,
            worksName2,
            worksName3,
            worksName4,
            worksName5,
            worksName6,
            worksDescription1,
            worksDescription2,
            worksDescription3,
            worksDescription4,
            worksDescription5,
            worksDescription6
        });
    }

    updateService = (event) => {
        event.preventDefault();
        const { worksImg1,
            worksImg2,
            worksImg3,
            worksImg4,
            worksImg5,
            worksImg6,
            worksName1,
            worksName2,
            worksName3,
            worksName4,
            worksName5,
            worksName6,
            worksDescription1,
            worksDescription2,
            worksDescription3,
            worksDescription4,
            worksDescription5,
            worksDescription6 } = this.state;
        localStorage.setItem('worksImg1', worksImg1);
        localStorage.setItem('worksImg2', worksImg2);
        localStorage.setItem('worksImg3', worksImg3);
        localStorage.setItem('worksImg4', worksImg4);
        localStorage.setItem('worksImg5', worksImg5);
        localStorage.setItem('worksImg6', worksImg6);
        localStorage.setItem('worksName1', worksName1);
        localStorage.setItem('worksName2', worksName2);
        localStorage.setItem('worksName3', worksName3);
        localStorage.setItem('worksName4', worksName4);
        localStorage.setItem('worksName5', worksName5);
        localStorage.setItem('worksName6', worksName6);
        localStorage.setItem('worksDescription1', worksDescription1);
        localStorage.setItem('worksDescription2', worksDescription2);
        localStorage.setItem('worksDescription3', worksDescription3);
        localStorage.setItem('worksDescription4', worksDescription4);
        localStorage.setItem('worksDescription5', worksDescription5);
        localStorage.setItem('worksDescription6', worksDescription6);
    }

    renderDefaultView = () => {
        const { worksImg1,
            worksImg2,
            worksImg3,
            worksImg4,
            worksImg5,
            worksImg6,
            worksName1,
            worksName2,
            worksName3,
            worksName4,
            worksName5,
            worksName6,
            worksDescription1,
            worksDescription2,
            worksDescription3,
            worksDescription4,
            worksDescription5,
            worksDescription6
        } = this.state
        return (
            <div>
                <div>
                    <img src={worksImg1} alt="kitty" onDoubleClick={this.changeEditMode} />
                    <h3 onDoubleClick={this.changeEditMode}>{worksName1}</h3>
                    <p onDoubleClick={this.changeEditMode}>{worksDescription1}</p>
                    <br />
                    <img src={worksImg2} alt="kitty" />
                    <h3 onDoubleClick={this.changeEditMode}>{worksName2}</h3>
                    <p onDoubleClick={this.changeEditMode}>{worksDescription2}</p>
                    <br />
                    <img src={worksImg4} alt="kitty" />
                    <h3 onDoubleClick={this.changeEditMode}>{worksName4}</h3>
                    <p onDoubleClick={this.changeEditMode}>{worksDescription4}</p>
                    <br />
                    <img src={worksImg5} alt="kitty" />
                    <h3 onDoubleClick={this.changeEditMode}>{worksName5}</h3>
                    <p onDoubleClick={this.changeEditMode}>{worksDescription5}</p>
                    <br />
                    <img src={worksImg3} alt="kitty" />
                    <h3 onDoubleClick={this.changeEditMode}>{worksName3}</h3>
                    <p onDoubleClick={this.changeEditMode}>{worksDescription3}</p>
                    <br />
                    <img src={worksImg6} alt="kitty" />
                    <h3 onDoubleClick={this.changeEditMode}>{worksName6}</h3>
                    <p onDoubleClick={this.changeEditMode}>{worksDescription6}</p>
                </div>
            </div>
        )
    }

    renderEditView = () => {
        const { worksImg1,
            worksImg2,
            worksImg3,
            worksImg4,
            worksImg5,
            worksImg6,
            worksName1,
            worksName2,
            worksName3,
            worksName4,
            worksName5,
            worksName6,
            worksDescription1,
            worksDescription2,
            worksDescription3,
            worksDescription4,
            worksDescription5,
            worksDescription6 } = this.state
        return (
            <div>
                <div>
                    <input
                        type="text"
                        value={worksImg1}
                        name="worksImg1"
                        onChange={this.handleChange}
                    />
                    <br />
                    <input
                        type="text"
                        value={worksName1}
                        name="worksName1"
                        onChange={this.handleChange}
                    />
                    <br />
                    <input
                        type="text"
                        value={worksDescription1}
                        name="worksDescription1"
                        onChange={this.handleChange}
                    />
                    <br />
                    <input
                        type="text"
                        value={worksImg2}
                        name="worksImg2"
                        onChange={this.handleChange}
                    />
                    <br/>
                    <input
                        type="text"
                        value={worksName2}
                        name="worksName2"
                        onChange={this.handleChange}
                    />
                    <br/>
                    <input
                        type="text"
                        value={worksDescription2}
                        name="worksDescription2"
                        onChange={this.handleChange}
                    />
                    <br />
                    <input
                        type="text"
                        value={worksImg3}
                        name="worksImg3"
                        onChange={this.handleChange}
                    />
                    <br/>
                    <input
                        type="text"
                        value={worksName3}
                        name="worksName3"
                        onChange={this.handleChange}
                    />
                    <br/>
                    <input
                        type="text"
                        value={worksDescription3}
                        name="worksDescription3"
                        onChange={this.handleChange}
                    />
                    <br />
                    <input
                        type="text"
                        value={worksImg4}
                        name="worksImg4"
                        onChange={this.handleChange}
                    />
                    <br/>
                    <input
                        type="text"
                        value={worksName4}
                        name="worksName4"
                        onChange={this.handleChange}
                    />
                    <br/>
                    <input
                        type="text"
                        value={worksDescription4}
                        name="worksDescription4"
                        onChange={this.handleChange}
                    />
                    <br />
                    <input
                        type="text"
                        value={worksImg5}
                        name="worksImg5"
                        onChange={this.handleChange}
                    />
                    <br/>
                    <input
                        type="text"
                        value={worksName5}
                        name="worksName5"
                        onChange={this.handleChange}
                    />
                    <br/>
                    <input
                        type="text"
                        value={worksDescription5}
                        name="worksDescription5"
                        onChange={this.handleChange}
                    />
                    <br />
                    <input
                        type="text"
                        value={worksImg6}
                        name="worksImg6"
                        onChange={this.handleChange}
                    />
                    <br/>
                    <input
                        type="text"
                        value={worksName6}
                        name="worksName6"
                        onChange={this.handleChange}
                    />
                    <br/>
                    <input
                        type="text"
                        value={worksDescription6}
                        name="worksDescription6"
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
                <h1>Works Container</h1>
                <WorksImage />
                {this.state.editMode && this.props.currentUser.is_admin === true ?
                    this.renderEditView()
                    :
                    this.renderDefaultView()}
            </div>
        )
    }
}

export default WorksContainer;