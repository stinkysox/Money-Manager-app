import './index.css'

const MoneyDetails = props => {
  const {expenditure, incomeAmount, balanceAmount} = props
  return (
    <>
      <li className="item balance">
        <div className="image-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
            alt="balance"
            className="amount-image"
          />
        </div>
        <div className="text-container">
          <p>Your Balance</p>
          <p data-testid="balanceAmount">Rs {balanceAmount}</p>
        </div>
      </li>
      <li className="item income">
        <div className="image-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
            alt="income"
            className="amount-image"
          />
        </div>
        <div className="text-container">
          <p data-testid="incomeAmount">Your Income</p>
          <p>Rs {incomeAmount}</p>
        </div>
      </li>
      <li className="item expenses">
        <div className="image-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
            alt="expenses"
            className="amount-image"
          />
        </div>
        <div className="text-container">
          <p data-testid="expensesAmount">Your Expenses</p>
          <p>Rs {expenditure}</p>
        </div>
      </li>
    </>
  )
}

export default MoneyDetails
