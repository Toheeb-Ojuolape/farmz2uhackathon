import './modal.css';

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        {/* <button type="button" onClick={handleClose}>
          Close
        </button> */}
        <p className="completeOrder" onClick={handleClose}> Complete Order</p>
        <p className="deleteOrder" onClick={handleClose}>Delete Order</p>
      </section>
    </div>
  );
};


export default Modal