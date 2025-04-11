import React from 'react'
import './topproducts.scss'
const TopProducts = () => {
  return (
    <div className='top-product-table'>
      <div className='main_heading'>
        <h2>Top Account Size</h2>
      </div>
      <div className='data-table-wrapped'>
        <div className='data-table-container'>
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Units Sold</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>01</td>
                <td>8k</td>
                <td>9000</td>
              </tr>
              <tr>
                <td>02</td>
                <td>15k</td>
                <td>6732</td>
              </tr><tr>
                <td>03</td>
                <td>25k</td>
                <td>1722</td>
              </tr>
              <tr>
                <td>05</td>
                <td>50k</td>
                <td>8478</td>
              </tr>
              <tr>
                <td>05</td>
                <td>100k</td>
                <td>8167</td>
              </tr>
              <tr>
              <td>05</td>
                <td>Instant 10k</td>
                <td>9261</td>
              </tr>
              
               
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default TopProducts;
