import React, { Fragment } from 'react';
import RegisterCss from '../styles/Register.scss';
// import DataRender from './DataRender';
export default class Register extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            password: "",
            text: "",
            avatar: "data:image/png;base64,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",
            list: []
        }
    }
    getName = (event) => {
        this.setState({ name: event.target.value });


    }


    loadFile = (event) => {
        console.log(URL.createObjectURL(event.target.files[0]));
        this.setState({
            avatar: URL.createObjectURL(event.target.files[0])
        });


    };
    getText = (event) => {
        this.setState({ text: event.target.value });

    }

    getPassword = (event) => {
        this.setState({ password: event.target.value });


    }


    pushData = () => {
        async function postData(url = 'https://5fc3323b9210060016869f8a.mockapi.io/api/flower-v1/user', data = {}) { // Default options are marked with *
            const response = await fetch(url, {
                method: 'POST',
                mode: 'cors',
                cache: 'no-cache',
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json'

                },
                redirect: 'follow',
                referrerPolicy: 'no-referrer',
                body: JSON.stringify(data)
            });
            return response.json();
        }

        postData('https://5fc3323b9210060016869f8a.mockapi.io/api/flower-v1/user', {
            name: this.state.name,
            password: this.state.password,
            text: this.state.text,
            avatar: this.state.avatar
        }).then(data => {


            document.querySelector(".data__image").src = data.avatar;
            document.querySelector(".data__user").innerHTML = data.name;
            document.querySelector(".data__password").innerHTML = data.password;
            document.querySelector(".data__title").innerHTML = data.text;

        })

    }
    render() {

        return (

            <Fragment>
                <h1>I can hack your information</h1>
                <div className="container">
                    <div className="row form__item">

                        <div className="col-md-6">

                            <div className="form-control form">

                                <div className="row item">
                                    <div className="col-md-6">

                                        <img src={
                                            this.state.avatar
                                        }
                                            alt=""
                                            className="user__avata" />
                                        <input type="file" placeholder="user avata" id="avatar" accept="image/*"
                                            onChange={
                                                this.loadFile
                                            } />
                                    </div>
                                </div>


                                <div className="row item">
                                    <div>
                                        <label htmlFor="name">User name</label>
                                        <input type="text" placeholder="user name" id="name"
                                            onChange={
                                                this.getName
                                            }
                                            autoComplete="true" />
                                    </div>
                                </div>
                                <div className="row item">
                                    <div>
                                        <label htmlFor="password">User password</label>
                                        <input type="password" placeholder="user password" id="password" autoComplete="true"
                                            onChange={
                                                this.getPassword
                                            } />
                                    </div>
                                </div>
                                <div className="row item">
                                    <div>
                                        <label htmlFor="text__detail">send your mesenger</label>
                                        <textarea id="text__detail" placeholder="type your mesenger"
                                            onChange={
                                                this.getText
                                            }></textarea>

                                    </div>
                                </div>
                                <div className="row submit__value item">
                                    <div className="col-md-4">

                                        <input type="button" value="send"
                                            onClick={
                                                this.pushData
                                            } />
                                    </div>
                                </div>


                            </div>

                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
