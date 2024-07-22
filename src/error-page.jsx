import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function ErrorPage() {

    const navigate = useNavigate()

    return(
        <h1>Oops</h1>
    )

    useEffect(() => {
        setTimeout(() => {
            navigate('/')
        }, 1000)
    })

}