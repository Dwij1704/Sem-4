export default function Ex3(props){
    return(
        props.details.map((vals)=>{
            return(<>
            <img src={vals.img}></img>
                    <h1>{vals.name}</h1>
                    <p>{vals.price}</p>
            </>
            )
        })
    )
}