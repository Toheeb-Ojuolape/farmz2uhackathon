import React,{Component} from 'react'
import Menu from "./Menu"



class ProductTable extends Component {
    render(){
        const { toptableProduct } = this.props
        const toptableProductList = toptableProduct.map(toptableProduct =>{
            return (
                <div className="tableProduct" key={toptableProduct.id}>
                 <div className="table"> 
                <div className="column17">{toptableProduct.product}</div>
                <div className="column17">{toptableProduct.picture}</div>
                <div className="column17">{toptableProduct.stock}</div>
                <div className="column17">{toptableProduct.details}</div>
                <div className="column17">{toptableProduct.price}</div>
                <div className="column17">{toptableProduct.status}</div>
                </div>
               
               </div>
             )
         })

     const { tableProduct } = this.props
     const tableProductList = tableProduct.map(tableProduct =>{
         return(
            <div className="tableProduct" key={tableProduct.id}>
            <div className="tabless"> 
           <div className="column17">{tableProduct.product}</div>
           <div className="column17">{tableProduct.picture}</div>
           <div className="column17">{tableProduct.stock}</div>
           <div className="column17">{tableProduct.details}</div>
           <div className="column17">{tableProduct.price}</div>
           <div className="column17"><p className="button">{tableProduct.status}</p></div>
           <div className="column18"><Menu /></div>
           </div>
          
          </div>
         )
     })
        return(
            <div className="table">
                {toptableProductList} 
                 {tableProductList}
            </div>
        )
    }
}

export default ProductTable