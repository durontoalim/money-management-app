import React from 'react'
import { connect } from 'react-redux'
import {loadTransactions } from '../store/actions/transactionAction'
import CreateTransaction from '../components/transaction/CreateTransaction'

class Dashboard extends React.Component {

    state = {
        createModalOpen: false
    }

    openCreateModal = () => {
        this.setState({
            createModalOpen: true
        })
    }

    closeCreateModal = () => {
        this.setState({
            createModalOpen: false
        })
    }

    componentDidMount() {
        this.props.loadTransactions()
    }

    render() {
        let {auth, transactions} = this.props
        return (
            <div className='row'>
                <div className='col-md-8 offser-md-2'>
                    <h1>Welcome {auth.user.name} </h1>
                    <p> Your Email is {auth.user.email}</p>

                    <button className='btn btn-primary' onClick={this.openCreateModal}> Create New Transaction </button>
                    <CreateTransaction isOpen={this.state.createModalOpen} close={this.closeCreateModal} />

                    <br/>

                    <h1>Transactions: </h1>
                    {transactions.length > 0 ? <ul className='list-group'>
                        {
                            transactions.map(transaction => (
                                <li 
                                    key= { transaction._id }
                                    className='list-group-item'>
                                    <p>Type: {transaction.type}</p>
                                    <p>Amount: {transaction.Amount}</p>
                                </li>
                            ))
                        }
                    </ul> : <p>There is no transaction</p>}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
    transactions: state.transactions
})

export default connect( mapStateToProps, { loadTransactions })(Dashboard)