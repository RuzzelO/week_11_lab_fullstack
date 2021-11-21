import React from 'react'

export default function PersonDetail(props) {
    return (
        <div>
            <h1 key = {props.person.id}> {props.person.name.first} {props.person.name.last}</h1>
            <div >
                <a href="" class="cancel" title="Cancel">
                <img key = {props.person.id} src = {props.person.picture.medium} />
                </a>
                <h3 key = {props.person.id}>Username: {props.person.login.username}</h3>
                <h3 key = {props.person.id}>Gender: {props.person.gender}</h3>
                <h3 key = {props.person.id}>Time Zone: {props.person.location.timezone.description}</h3>
                <h3 key = {props.person.id}>Address: {props.person.location.street.number} {props.person.location.street.name}, {props.person.location.state}, {props.person.location.city}, {props.person.location.country} - {props.person.location.postcode}</h3>    
                <h3 key = {props.person.id}>Email: {props.person.email}</h3>
                <h3 key = {props.person.id}>Cell: {props.person.cell}</h3>
            </div>
        </div>
    )
}
