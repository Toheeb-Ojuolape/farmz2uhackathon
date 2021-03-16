import React,{Component} from 'react'
import Modal from './viewOrderModal.js';


class Table extends Component {
    constructor() {
        super();
        this.state = {
          show: false
        };
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
      }
    
      showModal = () => {
        this.setState({ show: true });
      };
    
      hideModal = () => {
        this.setState({ show: false });
      };
    
    render(){
        
     const { tableRow } = this.props
     const tableLists = tableRow.map(tableRow =>{
         return(

            <div key={tableRow.id}>
                <Modal show={this.state.show} handleClose={this.hideModal}>
          <p className="modalTitle">Order Number</p>
          <p className="modalValue">{tableRow.order}</p>
          <p className="modalTitle">Product(s)</p>
          <p className="modalValue">{tableRow.product}</p>
          <p className="modalTitle">Name</p>
          <p className="modalValue">{tableRow.name}</p>
          <p className="modalTitle">Delivery Address</p>
          <p className="modalValue">{tableRow.delivery}</p>
          <p className="modalTitle">Phone Number</p>
          <p className="modalValue">{tableRow.phone}</p>
          <p className="modalTitle">Zone</p>
          <p className="modalValue">{tableRow.zone}</p>
          <p className="modalTitle">Invoice amount</p>
          <p className="modalValue">N{tableRow.invoice}</p>
          <p className="modalTitle">Status</p>
          <p className="modalValue"> <span className="statusPoint">•</span> {tableRow.status}</p>
        </Modal>
        <div className="ordercard">
            
           <div className="rowOrder">
           <div className="statusColumn">
           <p className="status">•</p>
           </div>
           <div className="nameColumn">
    <p className="invoice">{tableRow.order}</p>
        <p className="name">{tableRow.name}</p>
        <p className="amountOrder">N{tableRow.invoice}</p>
        </div>
        <div className="buttonColumn">
            <p className="viewOrder" onClick={this.showModal}>View Order</p>
        </div>
    </div> 

          </div>
            </div>
            
         )
     })
        return(
            <div>
                {tableLists}
            </div>
        )
    }
}

export default Table