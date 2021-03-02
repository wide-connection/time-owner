import React, {Component} from 'react'; 
import './DayTable.css'

class DayTable extends Component {
    render() {
        return (
            <div className="filter">
                <table>
                    <tr>
                        <th>#</th>
                        <th>Length</th>
                        <th>Allocated time</th>
                        <th>Category</th>
                        <th>Mark Complete</th>
                    </tr>

                    <tr>
                        <td>1</td>
                        <td>Length</td>
                        <td>Allocated time</td>
                        <td>Category</td>
                        <td>Mark Complete</td>
                    </tr>

                    <tr>
                        <td>2</td>
                        <td>Length</td>
                        <td>Allocated time</td>
                        <td>Category</td>
                        <td>Mark Complete</td>
                    </tr>
                    
                    <tr>
                        <td>3</td>
                        <td>Length</td>
                        <td>Allocated time</td>
                        <td>Category</td>
                        <td>Mark Complete</td>
                    </tr>
                    
                    <tr>
                        <td>4</td>
                        <td>Length</td>
                        <td>Allocated time</td>
                        <td>Category</td>
                        <td>Mark Complete</td>
                    </tr>


                </table>
                
            </div>
        )
    }
}

export default DayTable;