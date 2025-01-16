const UserCard = ({ user }) => {
  const { firstName, lastName, photoUrl, age, gender, about } = user;
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-300 w-80 shadow-xl">
        <figure>
          <img
            src={photoUrl}
            alt="photo"
            className="object-cover w-full h-48"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{firstName + " " + lastName}</h2>
          {age && gender && <p>{age + ", " + gender}</p>}
          <p>{about}</p>
          <div className="card-actions justify-center my-4">
            <button className="btn btn-primary">Ignore</button>
            <button className="btn btn-secondary">Interested</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
