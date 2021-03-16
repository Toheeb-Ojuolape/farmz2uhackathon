import React,{Component} from 'react'



class Table extends Component {
    render(){
        const { toptableRow } = this.props
        const tableList = toptableRow.map(toptableRow =>{
            return (
                <div className="tableRow" key={toptableRow.id}>
                 <div className="table"> 
                <div className="column13">{toptableRow.order}</div>
                <div className="column13">{toptableRow.product}</div>
                <div className="column13">{toptableRow.name}</div>
                <div className="column13">{toptableRow.delivery}</div>
                <div className="column13">{toptableRow.phone}</div>
                <div className="column13">{toptableRow.zone}</div>
                <div className="column13">{toptableRow.invoice}</div>
                <div className="column13">{toptableRow.status}</div>
                </div>
               
               </div>
            )
        })

     const { tableRow } = this.props
     const tableLists = tableRow.map(tableRow =>{
         return(
            <div className="tableRow" key={tableRow.id}>
            <div className="tables"> 
           <div className="column13">{tableRow.order}</div>
           <div className="column13">{tableRow.product}</div>
           <div className="column13">{tableRow.name}</div>
           <div className="column13">{tableRow.delivery}</div>
           <div className="column13">{tableRow.phone}</div>
           <div className="column13">{tableRow.zone}</div>
           <div className="column13">{tableRow.invoice}</div>
           <div className="column13">{tableRow.status}</div>
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