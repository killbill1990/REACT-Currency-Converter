
const ShowTypes = (prop) => {

//Here is the list with the types   
const types = prop.types;

//here is the amount 

    return (

        <div className="Select">

            {types.map((type) => (
                <div className="Options" key = {type.id}> <h2>{type.rate}</h2></div>
            ))

            }

        </div>

    );
}

export default ShowTypes;