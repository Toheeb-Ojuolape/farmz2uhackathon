import React,{Component} from 'react'
import Menu from './Menu'



class Table extends Component {
    render(){
        const { toptableRow } = this.props
        const tableList = toptableRow.map(toptableRow =>{
            return (
                <div className="tableRow" key={toptableRow.id}>
                 <div className="table"> 
                <div className="tableColumn">{toptableRow.order}</div>
                <div className="tableColumn">{toptableRow.product}</div>
                <div className="tableColumn">{toptableRow.name}</div>
                <div className="tableColumn">{toptableRow.delivery}</div>
                <div className="tableColumn">{toptableRow.phone}</div>
                <div className="tableColumn">{toptableRow.zone}</div>
                <div className="tableColumn">{toptableRow.invoice}</div>
                <div className="tableColumn">{toptableRow.status}</div>
                </div>
               
               </div>
            )
        })

     const { tableRow } = this.props
     const tableLists = tableRow.map(tableRow =>{
         return(
            <div className="tableRow" key={tableRow.id}>
            <div className="tables"> 
           <div className="tableColumn">{tableRow.order}</div>
           <div className="tableColumn">{tableRow.product}</div>
           <div className="tableColumn">{tableRow.name}</div>
           <div className="tableColumn">{tableRow.delivery}</div>
           <div className="tableColumn">{tableRow.phone}</div>
           <div className="tableColumn">{tableRow.zone}</div>
           <div className="tableColumn">{tableRow.invoice}</div>
           <div className="tableColumn">{tableRow.status}</div>
           <div className="columnMenu"><Menu /></div>
           </div>
          
          </div>
         )
     })
        return(
            <div className="table">
                {tableList}
                {tableLists}
            </div>
        )
    }
}

export default Table