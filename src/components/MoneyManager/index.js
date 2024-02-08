import {Component} from 'react'
import './index.css'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    transactionsList: [],
    amountInput: '',
    title: '',
    optionId: transactionTypeOptions[0].optionId,
  }

  onAddTransaction = event => {
    event.preventDefault()
    const {amountInput, title, transactionsList, optionId} = this.state

    const newTransaction = {
      id: uuidv4(),
      amountInput,
      title,
      optionId: optionId,
    }

    this.setState(prevState => ({
      transactionsList: [...prevState.transactionsList, newTransaction],
      amountInput: '',
      title: '',
      optionId: transactionTypeOptions[0].optionId,
    }))
    document.getElementById('amountInput').value = ''
    document.getElementById('titleInput').value = ''
  }

  onAmountUpdate = event => {
    this.setState({amountInput: event.target.value})
  }

  onTitleUpdate = event => {
    this.setState({title: event.target.value})
  }

  onSelectChange = event => {
    this.setState({optionId: event.target.value})
  }

  getExpenses = () => {
    const {transactionsList} = this.state
    let expensesAmount = 0

    transactionsList.forEach(eachTransaction => {
      if (
        eachTransaction.optionId.toLowerCase() ===
        transactionTypeOptions[1].optionId.toLowerCase()
      ) {
        expensesAmount += parseInt(eachTransaction.amountInput)
      }
    })

    return expensesAmount
  }

  getIncome = () => {
    const {transactionsList} = this.state
    let incomeAmount = 0

    transactionsList.forEach(eachTransaction => {
      if (
        eachTransaction.optionId.toLowerCase() ===
        transactionTypeOptions[0].optionId.toLowerCase()
      ) {
        incomeAmount += parseInt(eachTransaction.amountInput)
      }
    })

    return incomeAmount
  }

  getBalance = () => {
    const {transactionsList} = this.state
    let income = 0
    let expenses = 0

    transactionsList.forEach(eachItem => {
      if (eachItem.optionId === transactionTypeOptions[0].optionId) {
        income += parseInt(eachItem.amountInput)
      } else {
        expenses += parseInt(eachItem.amountInput)
      }
    })

    const balance = income - expenses
    return balance
  }

  deleteItem = id => {
    const {transactionsList} = this.state
    this.setState(prevState => ({
      transactionsList: prevState.transactionsList.filter(
        eachItem => eachItem.id !== id,
      ),
    }))
  }

  render() {
    const {transactionsList, amountInput} = this.state
    const expenditure = this.getExpenses()
    const incomeAmount = this.getIncome()
    const balanceAmount = this.getBalance()
    return (
      <div className="bg-container">
        <div className="container">
          <div className="top-container">
            <p className="top-heading">Hi, Richard</p>
            <p className="top-para">
              Welcome back to your
              <span className="top-span">Money Manager</span>
            </p>
          </div>
          <ul className="amount-container">
            <MoneyDetails
              expenditure={expenditure}
              incomeAmount={incomeAmount}
              balanceAmount={balanceAmount}
            />
          </ul>
          <div className="bottom-container">
            <div className="from-container">
              <form className="from-section" onSubmit={this.onAddTransaction}>
                <h1 className="from-heading">Add Transaction</h1>
                <div className="title form-el">
                  <label htmlFor="titleInput" className="label">
                    Title
                  </label>
                  <br />
                  <input
                    id="titleInput"
                    placeholder="TITLE"
                    className="input-el"
                    onChange={this.onTitleUpdate}
                  />
                </div>
                <div className="amount form-el">
                  <label htmlFor="amountInput" className="label">
                    Amount
                  </label>
                  <br />
                  <input
                    id="amountInput"
                    placeholder="Amount"
                    className="input-el"
                    onChange={this.onAmountUpdate}
                  />
                </div>
                <div className="select-container form-el">
                  <select className="input-el" onChange={this.onSelectChange}>
                    {transactionTypeOptions.map(eachItem => (
                      <option key={eachItem.optionId}>
                        {eachItem.displayText}
                      </option>
                    ))}
                  </select>
                </div>
                <button type="submit" className="btn">
                  Add
                </button>
              </form>
            </div>
            <div className="transaction-history">
              <h1>History</h1>
              <div className="transaction-table-container">
                <ul className="table-container">
                  <li className="table-rows">
                    <p className="row">Title</p>
                    <p className="row">Amount</p>
                    <p className="row">Type</p>
                  </li>
                  {transactionsList.map(eachItem => (
                    <TransactionItem
                      key={eachItem.id}
                      details={eachItem}
                      deleteItem={this.deleteItem}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
