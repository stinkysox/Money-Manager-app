import './index.css'

const TransactionItem = props => {
  const {details, deleteItem} = props
  const {id, amountInput, title, optionId} = details
  const onDeleteBtn = () => {
    deleteItem(id)
  }
  return (
    <li className="item-two">
      <p className="row">{title}</p>
      <p className="row">{amountInput}</p>
      <p className="row">{optionId}</p>
      <button
        type="button"
        className="btn-two"
        onClick={onDeleteBtn}
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png "
          alt="delete"
          className="delete-icon"
        />
      </button>
    </li>
  )
}

export default TransactionItem
