const Card = ({ user }) => {
    return (
        <div>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <p>{user.phone}</p>
            <p>{user.address.city}</p>
            <p>{user.company.name}</p> 
        </div>
    );
};

export default Card;