import React from 'react'

import AuthForm from 'components/AuthForm'

import './Home.scss'

class Home extends React.Component {
    render() {
        return (
            <div className="page_container">
                <AuthForm />
            </div>
        )
    }
}

export default Home