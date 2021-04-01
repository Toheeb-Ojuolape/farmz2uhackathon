import React,{Component} from 'react'
import Menu from './Menu'



class Table extends Component {
    render(){
        const { toptableRow } = this.props
        const tableList = toptableRow.map(toptableRow =>{
            return (
                <div className="tableRow" key={toptableRow.id}>
                 <table> 
                 <tr className="table">
                <th className="orderRow">{toptableRow.order}</th>
                <th className="productRow">{toptableRow.product}</th>
                <th className="nameRow">{toptableRow.name}</th>
                <th className="deliveryRow">{toptableRow.delivery}</th>
                <th className="phoneRow">{toptableRow.phone}</th>
                <th className="zoneRow">{toptableRow.zone}</th>
                <th className="invoiceRow">{toptableRow.invoice}</th>
                <th className="statusRow">{toptableRow.status}</th>
                </tr>
                </table>
               
               </div>
            )
        })

     const { tableRow } = this.props
     const tableLists = tableRow.map(tableRow =>{
         return(
            <div className="tableRow" key={tableRow.id}>
            <table>
            <tr className="tableValues">
           <td className="orderValues">{tableRow.order}</td>
           <td className="productValues">{tableRow.product}</td>
           <td className="nameValues">{tableRow.name}</td>
           <td className="deliveryValues">{tableRow.delivery}</td>
           <td className="phoneValues">{tableRow.phone}</td>
           <td className="zoneValues">{tableRow.zone}</td>
           <td className="invoiceValues">{tableRow.invoice}</td>
           <td className="statusValues">{tableRow.status}</td>
           <td><Menu /></td>
           </tr>
           </table>
          </div>
         )
     })
        return(
            <div className="orderTable">
                {tableList}
                {tableLists}
            </div>
        )
    }
}

export default Table