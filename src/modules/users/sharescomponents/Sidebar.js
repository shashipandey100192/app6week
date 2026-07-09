import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
    return (
        <div class="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary">


            <ul class="nav nav-pills flex-column mb-auto">
                <li class="nav-item"> <Link to="" class="nav-link" aria-current="page">
                    Dashboard
                </Link> </li>
                <li> <Link to="users" class="nav-link link-body-emphasis">
                    Users
                </Link> </li>
                <li> <Link to="about" class="nav-link link-body-emphasis">
                    About
                </Link> </li>
                <li> <Link to="myproduct" class="nav-link link-body-emphasis">
                    Products
                </Link> </li>
                <li> <Link to="customerlist" class="nav-link link-body-emphasis">
                    Customers
                </Link> </li>
            </ul>
        </div>
    )
}

export default Sidebar