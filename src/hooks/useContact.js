import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const useContact = (setChecked, checked) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);



    let url = "http://127.0.0.1:5000/api";

    const create_contacts = async (body) => {
        setLoading(true);
        setError(null);
        return fetch(`${url}/contact/addContact`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body)
        })
            .then((response) => {
                return response.json();
            })
            .then(data => {
                if(data.success){
                    toast.success("Your email is saved!!!");
                }else{
                    toast.error("Something went wrong")
                }
            })
            .catch((err) => {
                console.log({errormessage: err})
                setError(err.message);
                toast.error("Something went wrong")
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return {
        loading,
        error,
        create_contacts
    };
};

export default useContact;