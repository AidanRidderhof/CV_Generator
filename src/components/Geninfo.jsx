import { useState } from 'react'

function Geninfo() {

    return(
        <>
            <form>
                <label for="name">Full Name: </label>
                <input type="text" name="name" id="name" />

                <label for="email">Email Address: </label>
                <input type="email" name="email" id="email" />

                <label for="tel">Phone Number: </label>
                <input type="tel" name="phone" id="phone" />

                <input type="submit" value="Submit"/>
            </form>
        </>
    )
}

export default Geninfo