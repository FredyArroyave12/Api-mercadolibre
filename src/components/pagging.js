import React from 'react';
import Pagination from "react-js-pagination";

class Pagging extends React.Component {
     
    render() {
        return (
            <div>
            <Pagination
                activePage = {this.props.activePage}
                itemsCountPerPage = {50}
                totalItemsCount = {1000}
                pageRangeDisplayed = {10}
                onChange = {this.props.onChange}
                itemClass = {'page-item'}
                linkClass = {'page-link'}
                innerClass = {'pagination pagination-lg justify-content-center'}
            />
            </div>
        )
    }
}

export default Pagging;